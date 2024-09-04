const fs = require("fs");

fs.appendFile('area.txt', " area of a Circle", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data is appended");
    }
})