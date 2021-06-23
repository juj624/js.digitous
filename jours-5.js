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
 // on a copier la fonction et ensuite coller dans l'autre page appeler table-untils.js//

 // var {addition,multiply} = require("./table-untils");

 // addition(parseInt(process.argv[2]));//(viens de la page table-untils.js)//

// // multiply(parseInt(process.argv[2]));

//04

// var prompt = require("prompt");
// prompt.start();

// var mysteryNum = Math.floor(Math.random() *(100-1)+1);

// function play() {
//     prompt.get({
//         name:"user",
//         description:"Quel est le nombre mystère ?",
//     }
//     )
// },function(err,res)


var prompt = require("prompt");
    prompt.start();

    var mysteryNum = Math.floor(Math.random() *(100-1)+1);

function play() { 
    prompt.get({ name: "nb", description: "Quel est le nombre mystère  ?"}, function (err, res) { 
      if(parseInt(res.nb) === mysteryNum) {
        console.log("bravo !!!");
      }
      if (parseInt(res.nb) > mysteryNum) { 
        console.log("moins");
        play()
      }if (parseInt(res.nb) < mysteryNum) {
        console.log("plus");
        play(); 
      } else {
        console.log("error");
      }
      
    });
  }
  play(); 
   
  