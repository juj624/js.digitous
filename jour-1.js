console.log("Hello World !");


var test = "my name is julien";
console.log(test);


var name ="penot";
console.log("nice to meet you" +" "+name);

var testLength = "I'm very long !";
console.log(testLength.lengthno);

var food = "croissant is meh";
food = food.replace("meh","good");
console.log(food);


var basic ="this is cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();

console.log(basic, "\n", basicUp,"\n", basicDown);
/* console.log(basic)*/
/* console.log(basicUp)*/
/* console.log(basicDown)*/

var word = "banana";
var letters = word.split("");

console.log(letters);


var age = "25";
var transplate = `i'm ${age} years old`;
console.log(transplate);

/* exercice 1 bonus*/
var oserVar = `I'm ${age} years old  and i speak french`;

console.log(oserVar.substring(5, 10));
console.log(oserVar.substring(4,9));
console.log(oserVar.substring(8,10));
/* fin exercice 1 bonus */

/* exercice 2 bonus */
 



/* fin exercice 2 bonus */


/* exercice 3 bonus */
var changed = "bonjour";
var wart = changed.replace(/o/g,"a");
console.log(wart);

/* fin eexercice 3 bonus */
