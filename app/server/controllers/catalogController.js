const router = require('express').Router();
const api = require('../services/fragranceService');

router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/create', async (req, res) => {
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


module.exports = router;
