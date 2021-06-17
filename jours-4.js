
/*exos 1 */
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true,
}
 console.log(cat);
 console.log(cat.age);

  if (isCute = true){
    console.log("So cute");
  } else ("")

  /* fin exos 1 */


  /*exos 2 */
var cat2 = {
    name : "giroud",
    age : 32,
    isCute : true,
}
var cats = [cat,cat2];
console.log(cats[0].age);
console.log(cats[1].isCute);

  /*fin exos 2 */

  /*exos 3*/

  function checkIfEven(num) {
      if(num % 2 === 0 ){
          console.log("even");
      }else {
          console.log("odd");
      }
  }
checkIfEven(4);
checkIfEven(5);
checkIfEven(6);

  /*fin exos 3*/


  /*exercice 4*/
function compare(num1,num2) {
    if (num1 > num2) {
        console.log("num1 is bigger");
    } else if ( num1 < num2){
        console.log("num2 est plus grand");
    } else {
        console.log("both are the same");
    }
}    
    compare(4,1);

  /*Fin de l'exercice 4*/

  /* exercice 5*/
//     var total = 0;

//   function addUpp(num) {
//       for (var i = 1 ; i<= num; i++){
//           total = total + i;
          
//       }
//   }
//   addUpp(12);
//   console.log(total);

function addUpp(num) {
    var total = 0;
    for(var i = 1; i<= num; i++) {
        total = total + i ;
    } 
    return total
}

console.log(addUpp(2));


  /* Fin de l'exercice 5*/

  /*exercice 6*/


  
  /*Fin de l'exercice 6*/