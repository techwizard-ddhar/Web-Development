const { error } = require("console");
// const fs = require("fs");

// function ReadFile(){
//     return new Promise(function(resolve, reject){
//         fs.readFile('circleArea.txt', 'utf-8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     });
// }


// function readData(data){
//     console.log(data);
// }

// const a = ReadFile();
// console.log(a); // Pending

// ReadFile().then(readData).catch((error)=>{
//     console.error("Error reading file", error)
// }); // resolve then fullfilled

// -------------------------------------------------------------------------------------------- //

// function ReadFile1(){
//     return new Promise(function(resolve){
//         resolve("Hello all");
//     });
// }


// let ans = ReadFile1();
// console.log(ans);

// ------------------------------------------------------------------------------------------- //

// Promise.all()

const promise1 = Promise.resolve(3);
//const promise2 = 42;
const promise2 = Promise.reject(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });


  // Promise.allsettled()

  const promise4 = Promise.resolve(3);
  const promise5 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
  );
  const promises = [promise4, promise5];
  
//   Promise.allSettled(promises).then((results) =>
//     results.forEach((results) => console.log(results.status)),
//   );

Promise.allSettled(promises).then((results)=>{
    console.log(results);
})


// Promise.race()

const promise6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise7 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise6, promise7]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });

// Promise.any()

const promise8 = Promise.reject(0);
const promise9 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise10 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promise = [promise8, promise9, promise10];

Promise.any(promise).then((value) => console.log(value));
