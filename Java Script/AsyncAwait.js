// function ReadFile2(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("Hello inside promise !!");
//         }, 3000);
//     });
// }

// function meth2(){
//     let value = ReadFile2(); // it get stuck over here -- solution --> {async and await}
//     console.log(value);
// }

// meth2();

// ReadFile2().then(function meth2(data){
//     console.log(data);
// })

// ------------------------------------------------------------------------------------------- //

function ReadFile(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello inside promise !!");
        }, 3000);
    });
}


function main(){
    ReadFile().then(function main(val){
        console.log(val);
    });
    console.log("Namaste js");
}

// async function main(){
//     let value = await ReadFile(); // thread will get stuck over here, for 3sec
//     console.log("hii there-1");
//     console.log(value);
// }

main();

// await is only validate inside async function