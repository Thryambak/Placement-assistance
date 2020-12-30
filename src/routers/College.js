const express = require('express');
const College = require('../models/College');
const router = new express.Router();
const authCollege = require('../middleware/authCollege');
const authAdmin = require('../middleware/authAdmin');

// router.get('/add/college', (req, res) => {
//     res.render('addCollege');
// });

router.post('/add/college', authAdmin, async (req, res) => {
    console.log('enter');
    req.body.tokens=undefined;
    
    let data = {
        name: req.body.name,
        cetcode: req.body.cetcode,
        contact: req.body.contact,
        location: req.body.location,
        degree: req.body.degree,
        password: req.body.password,
        tokens: req.body.tokens

    }
    const college = new College(data);
   
    try{
        await college.save();
        res.status(200).send();
    } catch(error) {
        if(error.name==='MongoError'&&error.code===11000)
        res.status(500).send();

        else
        res.status(404).send();
    }
});

router.get('/colleges', async (req, res) => {
    let colleges = await College.find({});
    colleges.forEach(element => {
        element.password=undefined;
        element.tokens=undefined;
    });
    colleges = JSON.stringify(colleges);
    res.status(200).send(colleges);
});



router.post('/login/college', async (req, res) => {
    try{
        const college = await College.findByCredentials(req.body.username, req.body.password);
        const token = await college.generateAuthToken();
        const data = JSON.stringify({
            
            
                
            token
        
    });
       
        res.status(200).send(data);    
    } catch(error) {
        console.log(error);
        res.status(400).send();
        
    }
});

router.post('/college/profile', authCollege, (req, res) => {
    try{
        res.send({
            name: req.college.name
        })
    } catch(error) {
        res.send('error');
    }
});

router.get('/college/id_name', async (req, res) => {
    const colleges = await College.find({}).select({'_id':1, 'name': 1});
    res.send(colleges);
});

module.exports = router;