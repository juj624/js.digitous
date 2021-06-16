

/*exercice 1*/
var integer = 102;
var float = 13.9;

console.log(integer,float);

/*Fin de l'exercice 1*/


/*exercice 2*/

var basic = 34;
var stringified = basic.toString();

 console.log(stringified);

 /*fin de l'exercice 2*/

 /*exercice 3 */

 var num = 1.5;
 var rounded = Math.round(num);

 console.log(rounded);

 /* fin de l'exercice 3*/

 /*exercice 4 */

 var test = 12;
 var bis = 5 ;

 console.log(test - bis);
 console.log(test + bis);
 console.log(test / bis);
 console.log(test * bis);
 console.log(test % bis);
 console.log(test ** bis);

 console.log(test-=bis);
 console.log(test+=bis);
 console.log(test/=bis);
 console.log(test*=bis);
 console.log(test %= bis);
 console.log(test**=bis);

 /* fin de l'exercice 4*/

 /*exercice 5*/

 var test = 143;
 var bis = 219;
 console.log(test < bis);
 console.log(test > bis);
 console.log(test >= bis);
 console.log(test <= bis);
 console.log(test == bis);
 console.log(test === bis);
 console.log(test != bis);
 console.log(test !== bis);

 /*fin de l'exercice 5*/

 /*exercice 6*/

var limit = 50;
var score = 64 ;
 
if (score>=limit) {
    console.log("ok good baby !");
}else {
    console.log("oh nooo..my god");
}

score = 45;


 /*fin de l'exercice exercice 6*/

 /* exercice 7 */

 var password = "azerty";
  if (password.length>5){
     console.log("The password is secure");
  }

 /*fin de l'exercice 7 */

 /*exercice 8*/
 
 var limit = 50;
 var score = 64 ;
 var password = "azerty";

 if (score.length> 5 && score >= limit) {
    console.log("everything is good !");
} else if (score.length > 5 || limit ){
    console.log("something is good");
} else {
    console.log("nothing is good");
}
/* fin de l'exercice 8*/

/*BONUS*/
 var minrandom = 1;
 var maxrandom = 6;
 var random = Math.floor(Math.random()* (maxrandom - minrandom + 1)+  minrandom)
 console.log(random);

 if  (random === 6) {
     console.log("yes i win !");
 } else {
     console.log("so close...");
 }

/*Fin du bonus */


/*BONUS 2*/

var month = "january";

switch (month) {
    case"january":
    console.log("winter");

    break;
    case "mars":
    console.log("spring");

    break;
    case "october":
    console.log("fall");

    break;
    case "august":
        console.log("summer")
    break;
    default:
        console.log("That' not season...")
}

/* FIN BONUS 2*/

/*BONUS 3*/

var rounderNumber = 3.6;

 if (rounderNumber - Math.floor(rounderNumber)){
    console.log(rounderNumber);
 } else  {
     console.log(Math.ceil(roundedNumber));
 }

/*Fin du bonus 3 */