const express = require('express');
const router = express.Router();
const BURG = require('../models/burger');

router.get('/burgers', (req, res) => {
    let burgers = BURG.allBurgers();
    burgers.then((burgers)=>{
        res.json(burgers);
    });
    
});

module.exports = router;