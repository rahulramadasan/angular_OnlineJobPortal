var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const admindata = require("./model/admindata");
const User = require("./model/userdata");
const log=require("./logic")
//const db='mongodb://localhost:27017/onlineJobPortal'
const db = 'mongodb+srv://rahul:rahul1234@cluster0.yoa22.mongodb.net/onlineJobPortal?retryWrites=true&w=majority'

mongoose.connect(db, (err) => {
    if (err) {
        console.error('error !!' + err)
    }
    else {
        console.log('connected to db')
    }
})

//register api

router.post('/register', (req, res) => {
    var userdata = req.body
    var user = new User(userdata)
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

//login api

router.post('/login', (req, res) => {
    var userdata = req.body
    User.findOne({ email: userdata.email }, (err, user) => {
        if (err) {
            console.group(err)
        } else if (!user) {
            res.status(401).send('invalid Email')
        } else if (user.password != userdata.password) {
            res.status(401).send('invalid Password')
        }
        else {
            res.status(200).send(user)
        }
    })
})


// router.post('/login',(req,res)=>{
//     var userdata=req.body
//     log(userdata)
// })

 

router.post('/admin/add', (req, res) => {
    new admindata(req.body).save((err, jobD) => {
        (err) ? console.log(err) : res.status(200).send(jobD)
    })
})


router.get('/admin/view', (req, res) => {
    admindata.find()
        .then(function (data) {
            res.send(data);
        })
})

//view edit data to edit-component

router.get('/admin/editjob/:id', (req, res, next) => {
    admindata.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//update job

router.put('/admin/update/:id', function (req, res, next) {
    admindata.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);


    });
})

//delete job

router.delete('/admin/delete/:id', function (req, res, next) {
    admindata.findByIdAndRemove(req.params.id, function (err, post) {
        if (err)
            return next(err);
        res.json(post);


    });
})

module.exports = router;


