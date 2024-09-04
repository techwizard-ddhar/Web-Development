type info = {
    id:number;
    name:String;
    age:number;
    email:String;
    password:String;
}

type props = Pick<info, 'name' | 'age' | 'email'>

function displayinfo(features: props) {
    console.log(`Name is ${features.name}, and age is ${features.age}, and email is ${features.email}`);
}

const userinfo: props = {
    name:"Debanjan",
    age: 24,
    email:"debanjandhar45@gmail.com"
}

displayinfo(userinfo);