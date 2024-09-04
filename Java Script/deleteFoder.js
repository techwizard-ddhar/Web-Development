const fs = require("fs");

fs.rm('Js', {recursive:true}, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("folder deleted successfully");
    }
})