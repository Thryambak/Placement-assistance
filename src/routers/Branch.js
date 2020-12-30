const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch');
const authAdmin = require('../middleware/authAdmin');
const authCollege = require('../middleware/authCollege');
const Has = require('../models/Has');
var iscircuit=false;

router.post('/add/branch', authAdmin, async (req, res) => {
    
   
    try{
        iscircuit = req.body.circuit ==='0' ? true:false;
        

        
        const branch = new Branch({
            name: req.body.name,
            circuit: iscircuit 

        });

        await branch.save();
       res.status(200).send();
       
    } catch(e) {
        console.log(e);
        res.status(400).send();
    }
});
//

router.post('/branches/data/bycet', async (req, res) => {
    
    const currBranches = await Has.find({collegeid: req.college._id});
    let curr = [];
    let finals = [];
    currBranches.forEach(element => {
        curr.push(String(element.branchid));
    });

    if(req.body.isUnique=="no")
    {
        
        allBranches.forEach(element => {

            
            finals.push(element);
        });
    }

    else{
         allBranches.forEach(element => {

        if(curr.indexOf(String(element._id))===-1) finals.push(element);
                });
        }
    console.log('curr', curr);
    console.log('final', finals);
    res.send(JSON.stringify({finals}));
});



//
router.post('/branches/data',authCollege, async (req, res) => {
    const allBranches = await Branch.find({});
    
    if(req.body.token!=''){
        const  currBranches = await Has.find({collegeid: req.college._id});
       let curr = [];
       let finals = [];
       currBranches.forEach(element => {
           curr.push(String(element.branchid));
       });
   
       if(req.body.isUnique=="no")
       {
           
           allBranches.forEach(element => {
   
               
               finals.push(element);
           });
       }
   
       else{
            allBranches.forEach(element => {
   
           if(curr.indexOf(String(element._id))===-1) finals.push(element);
                   });
           }
       console.log('curr', curr);
       console.log('final', finals);
       res.send(JSON.stringify({finals}));
 
      
    }
    else{
        const   currBranches = await Has.find({});
        console.log('its coming here')
        let curr = [];
        let finals = [];
        currBranches.forEach(element => {
            curr.push(String(element.branchid));
        });
    
        if(req.body.isUnique=="no")
        {
            
            allBranches.forEach(element => {
    
                
                finals.push(element);
            });
        }
    
        else{
             allBranches.forEach(element => {
    
            if(curr.indexOf(String(element._id))===-1) finals.push(element);
                    });
            }
        console.log('curr', curr);
        console.log('final', finals);
        res.send(JSON.stringify({finals}));
    }
    
   
});


router.post('/branches/data/forView', async (req, res) => {
    const allBranches = await Branch.find({});
    
    if(req.body.token!=''){
        const  currBranches = await Has.find({collegeid: req.college._id});
       let curr = [];
       let finals = [];
       currBranches.forEach(element => {
           curr.push(String(element.branchid));
       });
   
       if(req.body.isUnique=="no")
       {
           
           allBranches.forEach(element => {
   
               
               finals.push(element);
           });
       }
   
       else{
            allBranches.forEach(element => {
   
           if(curr.indexOf(String(element._id))===-1) finals.push(element);
                   });
           }
       console.log('curr', curr);
       console.log('final', finals);
       res.send(JSON.stringify({finals}));
 
      
    }
    else{
        const   currBranches = await Has.find({});
        console.log('its coming here')
        let curr = [];
        let finals = [];
        currBranches.forEach(element => {
            curr.push(String(element.branchid));
        });
    
        if(req.body.isUnique=="no")
        {
            
            allBranches.forEach(element => {
    
                
                finals.push(element);
            });
        }
    
        else{
             allBranches.forEach(element => {
    
            if(curr.indexOf(String(element._id))===-1) finals.push(element);
                    });
            }
        console.log('curr', curr);
        console.log('final', finals);
        res.send(JSON.stringify({finals}));
    }
    
   
});


router.get('/branches', async (req, res) => {
    const branches = await Branch.find({});
    res.render('viewBranches', {
        data: JSON.stringify(branches)
    })
});


module.exports = router;    