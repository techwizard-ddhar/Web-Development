const express = require("express");

const app = express();

const debuglog = require("debug")("development:appconfig");

const mongooseconnection = require("./MongoDB/config/mongoose");

const userModel = require("./MongoDB/models/user");

const port = 3000;

app.get("/create", async function(req, res, next){
    let createUser = await userModel.create({ // async function
        name:"Debanjan Dhar",
        email:"debanjandhar46@gmail.com",
        password:"qwerty"
    });


    debuglog("user created");

    res.send(createUser)
});

app.get("/read", async function(req, res, next){
    let User = await userModel.findOne({ // async function
        name:"Debanjan Dhar"
    });


    debuglog("readed");
    
    res.send(User)
});

app.get("/update", async function(req, res, next){
    let updatedUser = await userModel.findOneAndUpdate({name:"KIIT"}, {name:"rishi"}, {new:true});


    debuglog("user updated");
    
    res.send(updatedUser)
});

app.get("/delete", async function(req, res, next){
    let deletedUser = await userModel.findOneAndDelete({name:"rishi"});
    
    res.send(deletedUser);
});


app.listen(port);
