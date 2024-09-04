const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const jwtpassword = "eyJhbGciOiJIUzI1NiI";
const port = 5001;

//In memory DataBase
const user_db = [
    {

    username: "debanjandhar45@gmail.com",
    password: "CQLDZdoh300",
    name: "Debanjan"
    
    },

    {
    username: "rishiraj@gmail.com",
    password: "qwerty300",
    name: "Rishi"
    },

    {
    username: "joel@gmail.com",
    password: "samuel123",
    name: "Joel"
    }

];

function validate(username, password){
    let n = user_db.length;
    for(let i = 0; i < n; i++){
        if(user_db[i].username == username && user_db[i].password == password){
            return true;
        }
    }

    return false;
}
 app.use(express.json());

 app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

     if(!validate(username, password)){
        res.status(403).json({
            msg: "user doesn't exist"
        });
     }
     var token = jwt.sign({username: username}, "eyJhbGciOiJIUzI1NiI");// Generate jwt
     res.json({
        token
     });
 });

app.get("/user", function(req, res){
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token, jwtpassword);
        const username = decode.username;
          res.json({
           user: user_db.find(user => user.username === username)
       });
    
    }
    catch(err){
        res.status(403).json({
            msg: "invalid token"
        });
    }

    const token = req.headers.authorization;
    const decode = jwt.verify(token, jwtpassword);// verifying
    const username = decode.username; // decoding
        
    res.json({
        user_ID: user_db.filter(function(value){
            if(value.username == username){
                return false;
            }
            return true;
        })
    });

});

app.listen(port);
