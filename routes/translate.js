const express = require('express');
const translatte = require('translatte');
const router = express.Router();

router.post('/', (req, res) =>{
    if(!req.body.to || !req.body.from || !req.body.message){
        res.status(400).send("Request missing crucial information");
        return
    }
    translatte(req.body.message, {to: req.body.to, from: req.body.from}).then(result => {
        res.json({result: result.text});
    }).catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
    
});

module.exports = router;