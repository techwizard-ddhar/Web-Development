const fs = require("fs");

fs.mkdir('Js', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder created successfully");
    }
})