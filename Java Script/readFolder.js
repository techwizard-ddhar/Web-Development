const fs = require("fs");

fs.readdir('Js', (err, files)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(files);
    }
})