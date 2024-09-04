const express = require('express');
const app = express();
const port = 3001;

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username != "Debanjan" && password != "CQLDZdoj100"){
        res.status(403).json({
            msg: "user doesn't exist"
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req, res, next){

    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs"
        });
    }
    else{
        next();
    }
};

app.get("/healthChekup", userMiddleware, kidneyMiddleware, function(req, res){
    res.json({
        msg: "your kidney is healthy"
    });
});

app.listen(port);