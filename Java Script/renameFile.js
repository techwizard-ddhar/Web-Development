const fs = require("fs");

fs.rename('area.txt', 'circleArea.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Rename successfull");
    }
})