/*Array exo 1*/

//var fruits = ["mango","lemon","blueberry"];
//console.log(fruits);
//console.table(fruits);
/* fin array exo 1*/

/*Access exo 2 */
//var ingredients =["egg","milk","butter"]
//console.log(ingredients[1]);
//console.log(ingredients.indexOf("butter"));
/*Fin Access exo 2 */

/*exercice 3 add and remove*/
var objects = ["pen","book","lamp"]
objects.unshift("chair");
console.log(objects);

objects.pop("lamp");
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift("chair");
console.log(objects);

/*Fin de l'exercice 3 */

/*exercice 4*/

var number = [4,10,8,12,6];
number.reverse(number);
console.log(number);


number.sort();
console.log(number);
/*Fin eercice 5*/

/*debut exercice 5*/

var total= 0;
var limit = 10;

for ( var i = 0; i<= limit; i++){
    total = total + i ;
    
}
console.log(total);
/* Fin de l'exercice 5*/

/* exercice 6*/ 
var sentence = "hello konexio !";
var tabSentence = sentence.split("");
var tabReverse = [];

for ( var i = tabSentence.length; i >= 0 ;  i--) {
    tabReverse.push(tabSentence[i]);
}
console.log(tabReverse.join(" "));
 /*fin de l'exercice 6 */

 /*BONUS*/

 for(var i = 0 ; i<= 100; i++){

     if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if  ( i % 3 === 0){
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 7 === 0) {
        console.log("");
    }else {
        console.log(i);
    }
 } 
 /* Fin de BONUS*/

 /*bonus 2*/

var total= 0;
var limit = 10;
var i = 0;
while ( i < limit) {
    i++;
    total = total + i;
}
console.log(total);