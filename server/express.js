const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User")

const  app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get('/', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    console.log(req.body)
    UserModel.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.phone
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.phone
    }).then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(3005, () => {
    console.log("server is running express.js on port 3005")
})