let firstName = "Debanjn";
let age = 24;
let isMarried = false;

console.log("this person name is " + firstName + " and age is " + age);

let a = `this is ${firstName}`;

console.log(a);

//-------------------------------------------------------------------------------------------

if(isMarried){
    console.log(firstName + " is Married");
}
else{
    console.log(firstName + " is not married");
}
//-------------------------------------------------------------------------------------------

var x = 2;

function square(num){
    var res = num * num;
    return res;
}

var square1 = square(x);

var square2 = square(4);

console.log(square1);
console.log(square2);

//--------------------------------------------------------------------------------------------

// Arrays

let num = [1, 2, 3, 10, 25]

let b = num.toString(num);
console.log(b, typeof b);

let c = num.join("_");
console.log(c);

// let r = num.pop()
// console.log(r);

let p = num.push(30);
console.log(num);

num[0] = 11;
console.log(num);

//----------------------------------------------------------------------------------------------

const arr = [{Name:'Rishi', Gender:'Male'},
             {Name:'Kavya', Gender:'Female'},
             {Name:'Debanjan', Gender:'Male'}
            ];

function people_name(arr){
    arr.forEach(arr => {
        if(arr.Gender == 'Male'){
            console.log(arr.Name);
        }
    });
}

people_name(arr);

//----------------------------------------------------------------------------------------------

// Splice

// delete
var numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2, 10, 20);
console.log(numbers);

// add
const fruits = ['Apple', 'Date'];
fruits.splice(1, 0, 'Banana', 'Cherry'); 
console.log(fruits); 

//----------------------------------------------------------------------------------------------

//slice

const num1 = [1, 2, 3, 4, 5]
const sliced1 = num1.slice(2);
const sliced2 = num1.slice(2,4);
console.log("Before slice " + num1);
console.log("After slice1 " + sliced1);
console.log("After slice2 " + sliced2);

//----------------------------------------------------------------------------------------------

const names = ["YouTube", "Facebook", "Netflix", "Amazon Prime", "Instagram"]

for(const i of names){
    console.log(i);
}

//----------------------------------------------------------------------------------------------

const arr1 = [1, 2, 3, 4, 5]

// const res1 = arr1.map(ele=>{
//     return ele ** 2;
// });

const res1 = arr1.filter(ele=>{
    return (ele % 2 == 0);
});

console.log(res1);

//----------------------------------------------------------------------------------------------


