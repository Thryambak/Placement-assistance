const express = require('express');
const router = express.Router();
const authCollege = require('../middleware/authCollege');
const Question = require('../models/Question');
const Branch = require('../models/Branch');
const College = require('../models/College');

const Company = require('../models/Company');

router.post('/add/question', authCollege, async (req, res) => {
    let i=0;
     console.log('question is being added111')
   
        console.log('question is being added222')
        const data = {
            branchname: req.body.branch,
            collegeid: req.college._id,
            companyname: req.body.companyname,
            round: req.body.round,
            topic: req.body.topic,
            description: req.body.description
        }
        console.log(data);
        try {
            console.log('question is being added')
            const question = new Question(data);
            await question.save();
            res.status(200).send();
        } catch (error) {
            console.log(error);
            res.send(error);return;
        }
   
  
});

router.get('/questions', async (req, res) => {

    
    let filter = {};
    let query = `Question.find(filter)`;
    let college, branch, company;
    let names = {};
    if(req.query.college) {
        let myCollege = await College.findOne({name:req.query.college});
        filter['collegeid'] = myCollege._id;
      
    }
    if(req.query.branch) {
        filter['branchname'] = req.query.branch;
      
    }
   
    if(req.query.company) {
        filter['companyname'] = req.query.company;
     
    }
   
   const questions = await Question.find(filter);
  const data = JSON.stringify(questions);

     console.log("Data Recieved  ",data);

    res.status(200).send(data);
});

module.exports = router;    