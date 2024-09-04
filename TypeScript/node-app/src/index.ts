const x: number = 2978;
console.log(x);


function username(name:string){
    console.log("hello" + name);
}

username("Debanjan");

function sum(a:number, b:number):number{
    return a + b;
}

const value = sum(1,2);
console.log(value);

const greet = (name:string)=>`hello ${name} !`;

// Debanjan Dhar
console.log(greet("Rishi"));


interface user {
    firstname:string;
    lastname:string;
    email:string;
    age:number;
}

function islegal(user:user){
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

function greetings(user:user){
    console.log("Hii there " + user.firstname);
}

console.log(islegal({
    firstname:"debanjan",
    lastname:"dhar",
    email:"deb@gmail.com",
    age:24

}));

greetings({
    firstname:"debanjan",
    lastname:"dhar",
    email:"deb@gmail.com",
    age:24

});

interface person{
    email:string;
    age:number;
}

class Employee implements person{

    email:string;
    age:number;

    constructor(email:string, age:number){
        this.email = email;
        this.age = age;
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.email}`);
    }
}

const e = new Employee("deb@gmail.com", 24);
console.log(e.email);
e.greet("hello");



// Use case of types
// UNION

type user_id = string | number;

function emailID(id:user_id){
    console.log(id);
}

emailID("deb");
emailID(123);


//INTERSECTIONS

type Emp = {
    name:string;
    startDate:Date;
}

interface Manager{
    name:string;
    department:string;
}

type Lead = Emp & Manager;

const Teamlead: Lead = {
    name:"deb",
    department:"eng",
    startDate:new Date()
};


// function getFirstElement(arr:(string|number)[]){
//     return arr[0];
// }

// const ele1 = getFirstElement(["neha", "harkirat"]);
// const ele2 = getFirstElement([1, 2]);

// console.log(ele1.toUpperCase);


function getFirstElement<T>(arr:T[]){
    return arr[0];
}

const ele1 = getFirstElement(["neha", "harkirat"]);
const ele2 = getFirstElement([1, 2]);

console.log(ele1.toUpperCase);


