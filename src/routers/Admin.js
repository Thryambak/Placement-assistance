const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const authAdmin = require('../middleware/authAdmin');

router.post('/login/admin', async (req, res) => {
    console.log(req.body.username, req.body.password)
    try {
        const admin = await Admin.findByCredentials(req.body.username, req.body.password);
        const token = await admin.generateAuthToken();
        const data = JSON.stringify({
             token 
            
        });
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
       
       
        res.status(500).send();
       
    }
});

router.post('/logout/admin', authAdmin, async (req, res) => {
    console.log('logging out');
    req.admin.tokens = [];
    await req.admin.save();
    res.status(200).send();
});

module.exports = router;