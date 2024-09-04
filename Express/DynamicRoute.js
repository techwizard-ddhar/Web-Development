const express = require("express");
const app = express();
const port = 3000;

app.get("/users", (req, res)=>{
    res.send("Hello Express From users");
});

app.get("/users/:username", (req, res)=>{
    res.send(`Hello Express From ${req.params.username}`);
});

app.get("/users/:username/:age", (req, res)=>{
    res.send(`Hello Express From ${req.params.username} who's age is ${req.params.age}`);
})

app.listen(port);