const express = require('express');
const alienSchema = require('../models/alien');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.send('Error = ' + err);
    }
});

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });
    try {
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
        res.send('Error = ' + err);
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send('error ' + err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        await Alien.findByIdAndRemove(req.params.id).exec();
        res.send({ message: 'Deleted' });
    } catch (err) {
        res.send("Error " + err);
    }



});

module.exports = router;