
// //exercice-1//
// function sortLetters(string) {
//     var array = string.split("");
//     array = array.sort();
//     array = array.join("");
//     return array

// }

// console.log(sortLetters("konexio"));

//exercice 2//
function countEach(string) {
    var x = 0;
    var o = 0;
    var array = string.split("");
    for(var i = 0; i<= array.length; i++) {
      if (array[i] == "x"){
          x++
      }  
      if (array[i] == "o"){
          o++
      }  
    }
    if( x == o) {
        console.log("true");
    }else {
        console.log("false");
    }      
} 



countEach("xox");