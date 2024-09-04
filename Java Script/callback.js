const radius = [3, 1, 2, 4];

// const calculateArea = (radius)=>{
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }

// console.log(calculateArea(radius));


// const calculateDiameter = (radius)=>{
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }

//     return output;
// }

// console.log(calculateDiameter(radius));


// const calculatePerimeter = (radius)=>{
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }

//     return output;
// }

// console.log(calculatePerimeter(radius));


// Callback Function

const calculateArea = (radius)=>{
    return Math.PI * radius * radius;
}


const calculatePerimeter = (radius)=>{
    return 2 * Math.PI * radius;
}


const calculateDiameter = (radius)=>{
    return 2 * radius;
}


const calculateOperation = (radius, logic)=>{
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(calculateOperation(radius, calculateArea));

console.log(calculateOperation(radius, calculatePerimeter));

console.log(calculateOperation(radius, calculateDiameter));

// Using Map
console.log(radius.map(calculateArea));