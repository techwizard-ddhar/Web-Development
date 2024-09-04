// Function statement or Function Declaration

a();
//b(); // This will give an error

function a(){
    console.log("a is called");
}
// --> a();

// --------------------------------------------------------------------------------------------- //

// Function Expression

var b = function(){
    console.log("b is called");
}
// --> b();

// --------------------------------------------------------------------------------------------- //

// Anonymous Function
// It can be used as a value

var x = function (){
    console.log("Hello world");
}

x();

// ------------------------------------------------------------------------------------------- //

// Named Function Expression

var y = function square(){
    console.log("Namaste JavaScript")
}

// square(); --> It will give an error, it is created as a local variable,
// It cannot be access in Global execution context

y();

var y = function square(){
    console.log(square)
}

y();

// -------------------------------------------------------------------------------------------- //

// First Class Gunction

// use as a variable
var fun = () =>{
    console.log("Namaste Debanjan");
}

fun();


// can be pass as an argument in another function
function greet(){
    return "Hello, ";
}

function welcome(greet, name){
    console.log(greet() + name);
}

welcome(greet, "JavaScript");


// can be return from another function

function sayHello(){
    return ()=>{
        console.log("Hello");
    }
}

var xyz = sayHello();
xyz();


