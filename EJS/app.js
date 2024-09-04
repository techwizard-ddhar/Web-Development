const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('view engine', 'ejs');

// app.get("/", function(req, res){
//     res.render("index");
// });

app.get("/", function(req, res){
    res.render("profile");
});

// app.get("/check", function(req, res){
//     console.log(req.query);
//     res.send("Data successfully send to the server");
// });

app.post("/check", function(req, res){
    console.log(req.body);
    res.send("Data successfully send to the server");
});


app.listen(port);