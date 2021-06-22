// const { resourceLimits } = require("worker_threads");

// //1//
// function calculate(number1, operateur, number2) {
//     if (operateur === "+"){
//         console.log(number1 + number2);
//     }if (operateur === "-") {
//         console.log(number1 - number2);
//     }if (operateur === "/") {
//         console.log(number1 / number2);
//     }if ( operateur === "%") {
//         console.log(number1 % number2);
//     }
// }
// //calculate(4,"+",2);
// console.log(process.argv);

// // calculate(parseInt(process.argv[2]),process.argv[3],parseInt(process.argv[4]));

// 2//
 

// // var {addition,multiply} = require("./table-untils");

// // addition(parseInt(process.argv[2]));

// // multiply(parseInt(process.argv[2]));

//04

var prompt = require("prompt");
prompt.start();

var mysteryNum = Math.floor(Math.random() * (100-1)+1);

function play() {
    prompt.get({ name: "q", description: "Quel est le nombre mystère ?"
}
