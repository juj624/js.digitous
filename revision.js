
// //exercice-1//
// function sortLetters(string) {
//     var array = string.split("");
//     array = array.sort();
//     array = array.join("");
//     return array

// }

// console.log(sortLetters("konexio"));

//exercice 2//
// function countEach(string) {
//     var x = 0;
//     var o = 0;
//     var array = string.split("");
//     for(var i = 0; i<= array.length; i++) {
//     if (array[i] === "x"){
//           x++
//       }  
//     if (array[i] === "o"){
//           o++
//       }  
//     }
//     if( x == o) {
//         console.log("true");
//     }else {
//         console.log("false");
//     }      
// } 


// console.log(countEach("xxxoooox"));

//03

function checkPal(string){
    return string.split("").reverse("").join("") === string 
    // var splitword= string.split("");
    // var reverseword = splitword.reverse();
    // var joinword = reverseword.join("");
    // if(string !== joinword){
    //     console.log("palindrome !");
    // }else {
    //     console.log("Nope !");
    // }
}

checkPal("lattop");
checkPal("rececar");

//4//
var word =";"
function swap(string){
    //string.plit("");
   for(var i=0; i < string.length; i++){
    if (string[i] === string[i].toUpperCase()){
   word+= string[i].toLowerCase();   
    }
    else if(string[i]===string[i].toLowerCase()){
        word+= string[i].toUpperCase();
    }
   }
   return word
}

console.log(swap("Hello world"))