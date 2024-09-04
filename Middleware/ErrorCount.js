const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let errorCount = 0;

app.get("/user", function(req, res, next){
    const username = req.headers['user-id'];
    if(username){
        res.json({
            msg: "username is valid"
        });
    }
    else{
        next(new Error("username is not valid"));
    }
});

app.post("/info", function(req, res, next){
    const message = req.body.message;
    if(message){
        console.log(message);
        res.json({
            msg: "2 + 2 = 4"
        });
    }
    else{
        next(new Error("Server down"));
    }
});

app.get("/errorCount", function(req, res){
    res.status(200).json({
        errorCount
    });
});

// Error handling middleware
app.use(function(err, req, res, next){
    errorCount++;
    res.status(404).send({
        error: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});