const fs = require("fs");

fs.unlink('abc.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted successfully");
    }
})