// function greet(){
//     console.log("Hello world !!");
// }

// setTimeout(greet, 3000); // The code will execute after 3 sec


// for each iteration a new block is created
// function generate_number(){
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
// }

// generate_number();

function generate_number(){
    for (var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        }

        close(i);
    }
}

generate_number();
