const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/server", (req, res)=>{
    const message = req.body.message;
    console.log(message);

    fs.writeFile("ans.txt", `Message received : ${message}`, (err)=>{
        if(err){
            console.log(err);
            res.status(500).json({ error: "Failed to write to file" });
        }
        else{
            console.log("File created successfully");
            res.json({
                output:"2 + 2 = 4"
            });
            
        }
    });
});



app.listen(port,()=>{
    console.log(`listening to port ${port}`)
});