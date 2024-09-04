interface user3 {
    id: number;
    username: string;
}

type Users3 = Record<string, user3>

const stud: Users3 = {
    "xyz": {
        id: 2978,
        username: "xyz@gmail.com"
    },
    "abc": {
        id: 2916,
        username: "abc@gmail.com"
    }
}

// stud["xyz"].id = 2999;

const studs = new Map();

studs.set("xyz", {id:2999, username:"xyz@prisma.io"});
studs.set("abc", {username:"abc@prisma.io"});

const res = studs.get("xyz");
console.log(res);

