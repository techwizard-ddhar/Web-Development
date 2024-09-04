type User = {
    name : String;
    age : number
}

const result = (user1:User, user2:User)=>{
    return user1.age + user2.age;
}

console.log(result(
    {
    name:"Harkirat",
    age:28
    },
    {
        name:"Debanjan",
        age:24
    }
));

