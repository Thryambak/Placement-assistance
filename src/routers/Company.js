const express = require('express');
const Company = require('../models/Company');
//const authAdminCollege = require('../middleware/authAdminCollege');
const authCollege =require('../middleware/authCollege');
const Has = require('../models/Has');

const router = express.Router();


// router.get('/choose/company', async (req, res) => {
    
//     const companies = await Company.find({}).sort({name: 1});
//     if(req.query.q!='admin'&&req.query.q!='college') res.send('404');
//     else {
//         res.render('addCompany',{
//             authType: req.query.q,
//             data: JSON.stringify(companies)
//         });
//         res.status(200).send(JSON.stringify(companies));
//     }
// });

router.post('/choose/company',authCollege, async (req, res) => {
    console.log('..THE error',req.body);
    let companyid = req.body.companyid;
    let company;
    
        const companyData = {
            name: req.body.name,
            tier: req.body.tier
        }
        try {
           
            
            company = new Company(companyData);
            await company.save();
         res.status(200).send();
        } catch (error) {
            res.status(400).send();
        }
        // companyid = company._id;
    
    // const branches = await Has.find({collegeid: req.college._id}).populate('branchid');
    // const data = JSON.stringify({
    //     college:  req.college._id,
    //     company: companyid,
    //     branches
    // })
   
});

router.post('/companies', async (req, res) => {

    console.log('I was called');
    const companies = await Company.find({});
    res.status(200).send(JSON.stringify(companies));
});

module.exports = router;