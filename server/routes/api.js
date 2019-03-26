const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose')
const db = "mongodb://techno:techno123@ds125486.mlab.com:25486/technoliege-task"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected To MongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From API Route')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token});
        }
    })

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({userName: userData.userName}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
        if ( !user ) {
            res.status(401).send('Invalid UserName');
        } else 
        if ( user.password !== userData.password) {
            res.status(401).send('Invalid Password');
        } else {
            let payload = { subject: user._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token});
        }
    }
    })
})

})

module.exports = router;
