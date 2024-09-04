type Userinfo = {
     id:number;
     name:String;
     age:number;
     email:String;
     password:String;
}

// EVEN AFTER USING CONST:

// const user : Userinfo = {

//     id:2978,
//     name:"Debnajan",
//     age:24,
//     email:"debanjandhar45@gmail.com",
//     password:"qwerty"
// }

// user.name = "Harkirat";


const user : Readonly<Userinfo> = {

    id:2978,
    name:"Debnajan",
    age:24,
    email:"debanjandhar45@gmail.com",
    password:"qwerty"
}

// Error

//user.name = "Harkirat";