const express = require('express');
const router = express.Router();
const Branch = require('./Branch');
const college = require('./College');
const Has = require('../models/Has');
const College = require('../models/College');
const authCollege = require('../middleware/authCollege');
const mongoose = require('mongoose');

router.post('/add/has', authCollege, async (req, res) => {
    const hasData = {
        collegeid: req.college._id,
        branchid: mongoose.Types.ObjectId(req.body.branches),
        totalPlaced: 0,
        averagePackage: 0,
        placed:[]
    }
    const branch =  Has(hasData);
 
    try{
        await branch.save();
       res.status(200).send();
    } catch(error) {
        console.log(error);
        res.status(400).send();
    }
});

router.get('/college/details/:q', async (req, res) => {
    const cetcode = req.params.q;
    try{
        const college = await College.find({cetcode: cetcode});
        const collegeBranches = await Has.find({collegeid: college[0]._id}).populate('branchid');
        
        console.log(JSON.stringify({
            branches: collegeBranches,
            name: college[0].name,
            location: college[0].location
            
            
        }))

        res.status(200).send(JSON.stringify({
            branches: collegeBranches,
            name: college[0].name,
            location: college[0].location
            
        }));

    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
});

router.get('/add/branch', async (req,res) => {
    res.render('addBranch')
});

module.exports = router;