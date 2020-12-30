const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Visits = require('../models/Visits');
const authCollege = require('../middleware/authCollege');
const Has = require('../models/Has');
const Branch = require('../models/Branch');
const College = require('../models/College');

router.get('/visits', async (req, res) => {
    const companies = await Company.find({}).select({'_id': 1, 'name':1});
    res.render('addVisits', {
        data: JSON.stringify(companies)
    });
});

router.post('/add/visits', authCollege, async (req,res) => {
   
  
    try {
            let myBranch = await Branch.findOne({
                name:req.body.branch
            })
            
           let myCompany= await Company.findOne({
               name: req.body.company
           })
         
                const data = {
                    college: req.college._id,
                    company: myCompany._id,
                    branch: myBranch._id,
                    numberOfSelected: req.body.numberOfSelected,
                    averagePackage: req.body.averagePackage,
                    year: req.body.year
                }
                 console.log(data);
                const visit = new Visits(data);
                await visit.save();
                let has = await Has.find({collegeid: req.college._id, branchid: myBranch._id});
                console.log(has);
                has = has[0];
                let totalPlaced = 0;
                let yearFound=false;
                has.placed.forEach(element => {
                    totalPlaced+=parseInt(element.number);
                    if(String(element.year)===String(req.body.year)) {
                        yearFound=true;
                        element.number += parseInt(req.body.numberOfSelected);
                    }
                }); 
                if(!yearFound) {
                    has.placed.push({
                        number: req.body.numberOfSelected,
                        year: req.body.year
                    });
                }
                has.averagePackage = ((parseInt(has.averagePackage)*totalPlaced)+(parseInt(req.body.averagePackage)*parseInt(req.body.numberOfSelected))) / (totalPlaced+parseInt(req.body.numberOfSelected));

                await has.save();
            
        
        res.status(200).send();
    
    } catch (error) {

        console.log(error);
        res.status(400).send();
    }
});


module.exports = router;