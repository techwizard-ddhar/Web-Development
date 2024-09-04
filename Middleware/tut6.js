const express = require("express");
const app = express();
const port = 3000;

//Middleware
//If the same logic is used in every route, instead of writing same thing use Middleware
function CheckMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 18){
        next();
    }
    else{
        res.json({
            msg: "Sorry!! you are not eligible"
        });
    }
}

app.use(CheckMiddleware);

app.get("/ride1", function(req, res){
    res.json({
            msg: "You have successfully riden ride 1"
        })
    });

app.get("/ride2", function(req, res){
    res.json({
            msg: "You have successfully riden ride 2"
        })
    });


app.listen(port);