
/*exos 1 */
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true,
}
 console.log(cat);
 console.log(cat.age);

  if (cat.isCute){
    console.log("So cute");
  }

  /* fin exos 1 */


  /*exos 2 */
var cat2 = {
    name : "giroud",
    age : 32,
    isCute : false,
}


var cats = [cat, cat2];
console.log(cats[0].age);
console.log(cats[0]["age"]);

console.log(cats[1].isCute);
var cqv = "isCute";
console.log(cats[1][cqv]);


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
    compare(6,6);
    compare(4,8);

  /*Fin de l'exercice 4*/

  /* exercice 5*/
     var total = 0;

   function addUpp(num) {
       for (var i = 1 ; i<= num; i++){
           total = total + i;
          //console.log(`le total est ${total}`);
       }
   }
 //  addUpp(12);
 // console.log(total);

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
//  var  reste = 3700 % 3600 ;
//  Math.floor(3770/3600) = 1
//  var minutes = Math.floor(reste/60)=1
//  var seconde = reste % 60 = 40
  /*Fin de l'exercice 6*/



















  //BONUS

  function generatePassword(num) {
      if(num < 6 || num > 15){
          return "error";
      }

      let lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L"];
      let password = ""

      for (let i = 0; i<= num; i++) {
        let index = Math.floor(Math.random()*lettres.length -1);
        password += lettres[index];
      }

      return password;

  }
    console.log("")
    console.log(generatePassword(8));
    