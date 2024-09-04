const express = require("express");
const app = express();
const port = 3000;

app.get("/main", (req, res)=>{
    res.send("Hello Express From Main");
});

app.get("/server", (req, res)=>{
    res.send("Hello Express From Server")
});

// Handling Non-existence route
app.get("*", (req, res)=>{
    res.send("Page not found, BAD REQUEST")
})

app.listen(port);