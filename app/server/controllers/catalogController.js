const router = require('express').Router();
const api = require('../services/fragranceService');
const reviewService = require('../services/fragranceReviewService');
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    try {
        const data = await api.getAll();
        res.json(data);
    } catch (err) {
        return res.status(400).json({message: 'Server error! Try again later!'})
    }
});

router.get('/reviews', async (req, res) => {
    try {
        const data = await reviewService.getAllDetailed();
        res.json(data);
    } catch (err) {
        res.status(400).json({message: 'Server error! Try again later!'});
    }
});

router.post('/search', async (req, res) => {
    try {
        const searchString = req.body.catalogSearch;
        const validFragrances = await api.getAllThatHave(searchString);
        return res.json(validFragrances);
    } catch (err) {
        return res.status(400).json({message: 'Server error! Try again later!'});
    }
});

router.post('/create', async (req, res) => {
    const { name } = req.body;
    const alreadyExists = await api.getByName(name);

    if (alreadyExists) {
        return res
            .status(400)
            .json({ message: 'Fragrance with this name already exists!' });
    }

    try {
        const fragrance = await api.createOne({ ...req.body });
        const user = await userService.getById(req.body.author);
        user.ownedFragrances.push(fragrance._id);
        await userService.updateById(user._id, user);
        res.json({ message: 'Successfully created!', user });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Request error!' });
    }
});

router.get('/:fragranceId/details', async (req, res) => {
    const data = await api.getByIdDetailed(req.params.fragranceId);
    if (data) {
        return res.json(data);
    }
    res.status(404).json({
        message: `Fragrance with id: ${req.params.fragranceId} not found!`,
    });
});

router.post('/:fragranceId/edit', async (req, res) => {
    try {
        const fragrance = await api.getById(req.params.fragranceId);

        if (!fragrance) {
            return res.status(404).json({
                message: `Fragrance with id: ${req.params.fragranceId} not found!`,
            });
        }
        await api.updateById(req.params.fragranceId, { ...req.body });
        res.json(fragrance);
    } catch (err) {
        return res.status(400).json({message: 'Server error: Could complete editing operation'});
    }
});

router.get('/:fragranceId/delete', async (req, res) => {
    try {
        const fragranceToDelete = await api.getById(req.params.fragranceId);
        const creator = await userService.getById(fragranceToDelete.author);
    
        await Promise.all(
            fragranceToDelete.reviews.map(async (x) => {
                await reviewService.deleteReview(x._id);
            })
        );
    
        creator.ownedFragrances = creator.ownedFragrances.filter(
            (x) => x != req.params.fragranceId
        );
        await userService.updateById(creator._id, creator);
    
        await api.deleteById(req.params.fragranceId);
        res.json({ [req.params.fragranceId]: 'deleted', creator });
    } catch (err) {
        return res.status(404).json({message: 'Server error: Could not complete deleting operation'})
    }
});

router.post('/:fragranceId/review/create', async (req, res) => {
    
    const fragrance = await api.getById(req.params.fragranceId);
    const user = await userService.getById(req.body.author);

    if (!fragrance) {
        return res.status(404).json({
            message: `Fragrance with id: ${req.params.fragranceId} not found!`,
        });
    }

    if (req.body.rating < 1 || req.body.rating > 5) {
        return res.status(400).json({ message: 'Invalid rating!' });
    }

    try {
        const newReview = await reviewService.createReview({
            ...req.body,
            imageUrl: fragrance.imageUrl,
            fragranceName: fragrance.name,
            fragranceBrand: fragrance.brand,
        });
        fragrance.reviews.push(newReview._id);
        const total =
            (fragrance.rating + newReview.rating) / fragrance.reviews.length;
        fragrance.rating = total;
        await api.updateById(req.params.fragranceId, fragrance);
    
        user.reviews.push(newReview._id);
        await userService.updateById(user._id, user);
        res.json({ [req.params.fragranceId]: 'reviewed', user });
    } catch (err) {
        return res.status(404).json({message: 'Server error: Could not create review!'})
    }
});

router.post('/:fragranceId/review/edit', async (req, res) => {
    const fragrance = await api.getByIdDetailed(req.params.fragranceId);
    const user = await userService.getById(req.body.userId);

    if (!fragrance) {
        return res.status(404).json({
            message: `Fragrance with id: ${req.params.fragranceId} not found!`,
        });
    }

    if (req.body.description.length < 10) {
        return res.status(400).json({
            message: 'Description length must be at least 10 characters!',
        });
    }

    if (req.body.rating < 1 || req.body.rating > 5) {
        return res.status(400).json({ message: 'Invalid rating!' });
    }

    const isFound = fragrance.reviews.find(
        (x) => x.author._id.toString() == user._id.toString()
    );

    if(isFound) {
        let totalRating = 0;
        
        fragrance.reviews.forEach(x => totalRating += x.rating);
        totalRating += req.body.rating - isFound.rating;
        fragrance.rating = totalRating;

        isFound.description = req.body.description;
        isFound.rating = req.body.rating;

        try{
            await api.updateById(fragrance._id, fragrance);
            await reviewService.updateReview(isFound._id, {
                description: req.body.description,
                rating: req.body.rating
            });

            res.json(fragrance);
        } catch(err) {
            res.status(400).json({message: 'Could not modify the data!'});
        }
    } else {
        return res.status(404).json({message: 'Review not found!'});
    }
});

router.post('/:fragranceId/review/delete', async (req, res) => {
    const fragrance = await api.getByIdDetailed(req.params.fragranceId);

    const user = await userService.getByIdDetailed(req.body.userId);
    if (!fragrance) {
        return res.status(404).json({
            message: `Fragrance with id: ${req.params.fragranceId} not found!`,
        });
    }

    const isFound = fragrance.reviews.find((x) => {
        return x.author._id.toString() == user._id.toString();
    });

    if (isFound) {
        fragrance.reviews = fragrance.reviews.filter(
            (x) => x.author._id.toString() != user._id.toString()
        );
        if (fragrance.reviews.length === 0) {
            fragrance.rating = 0;
        } else {
            let sum = 0;
            fragrance.reviews.forEach((x) => (sum += x.rating));
            fragrance.rating = sum / fragrance.reviews.length;
        }
        try {
            await api.updateById(req.params.fragranceId, fragrance);

            user.reviews = user.reviews.filter(
                (x) => x.fragrance.toString() != fragrance._id.toString()
            );
            await userService.updateById(user._id, user);

            await reviewService.deleteReview(isFound._id);
            res.json({ [req.params.fragranceId]: 'deleted', user, fragrance });
        } catch (err) {
            res.json(400).json({message: 'Could not update the information!'});
        }
    } else {
        return res
            .status(404)
            .json({ message: 'User has not reviewed the fragrance!' });
    }
});

module.exports = router;
