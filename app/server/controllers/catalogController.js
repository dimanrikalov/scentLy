const router = require('express').Router();
const api = require('../services/fragranceService');
const reviewService = require('../services/fragranceReviewService');


router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/create', async (req, res) => {

    const {name} = req.body;
    const alreadyExists = await api.getByName(name);

    if(alreadyExists) {
        return res.status(400).json({message: 'Fragrance with this name already exists!'});
    }

    try {
        const result = await api.createOne({ ...req.body });
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Request error!' });
    }
});

router.get('/:fragranceId/details', async (req, res) => {
    const data = await api.getById(req.params.fragranceId);
    if(data) {
        return res.json(data);
    }
    res.status(404).json({"message": `Fragrance with id: ${req.params.fragranceId} not found!`})
});

router.get('/:fragranceId/edit', async (req, res) => {
    res.json({[req.params.fragranceId]: "edit"});
});

router.post('/:fragranceId/edit', async (req, res) => {
    const fragrance = await api.getById(req.params.fragranceId);
    if(!fragrance) {
        return res.status(404).json({"message": `Fragrance with id: ${req.params.fragranceId} not found!`})
    }
    await api.updateById(req.params.fragranceId, {...req.body});
    
    res.json({[req.params.fragranceId]: "edited"});
});

router.get('/:fragranceId/delete', async (req, res) => {
    await api.deleteById(req.params.fragranceId);
    res.json({[req.params.fragranceId]: "deleted"});
});


router.post('/:fragranceId/review', async (req, res) => {
    const fragrance = await api.getById(req.params.fragranceId);

    if(!fragrance) {
        return res.status(404).json({
            "message": 
                `Fragrance with id: ${req.params.fragranceId} not found!`
        });
    }

    if(req.body.rating < 1 || req.body.rating > 5) {
        return res.status(400).json({'message': 'Invalid rating!'});
    }
    const newReview = await reviewService.createReview(req.body);
    
    fragrance.reviews.push(newReview._id);
    const total = (fragrance.rating + newReview.rating) / fragrance.reviews.length;
    fragrance.rating =  total;

    await api.updateById(req.params.fragranceId, fragrance);
    
    res.json({[req.params.fragranceId]: "reviewed"});
});

module.exports = router;
