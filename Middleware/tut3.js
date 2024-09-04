const express = require("express");
const app = express();
const port = 3000;

app.get("/healthChekup", function(req, res){

    const kidneyId = req.query.kidneyId;
    const password = req.headers.password;
    const username = req.headers.username;

    if(username != "Debanjan" && password != "CQLDZdoj100"){
        res.status(403).json({
            msg: "user doesn't exist"
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs"
        });
        return;
    }

    res.json({
        msg: "your kidney is healthy"
    });
});

app.listen(port);