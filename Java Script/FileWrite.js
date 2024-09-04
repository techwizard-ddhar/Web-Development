const fs = require("fs");

const radius = [3, 1, 2, 4];

const calculateArea = (radius)=>{
    return Math.PI * radius * radius;
}

const calculateOperation = (radius, logic)=>{
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }

    return output;
}

const data = JSON.stringify(calculateOperation(radius, calculateArea));

fs.writeFile('area.txt', data, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file is created");
    }
});