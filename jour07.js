//exercice1

// var fs = require("fs");
// fs.readFile("jour7.txt", function (err, data) {
//     if (err) {
//        console.error(err);
//        return;
//     }
 
//     console.log("Lecture en différé : " + data.toString());
//  });

 //2

//  var array = [ 1, 2, 3, 4,5];
//  var double = array.map(function(num) {
//     return num * 2;
//   });
//   console.log(double);

  //exercice 3

//   var longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ];
// var shortNames = longNames.map(function(person){
//     return {name: `${person.firstName} ${person.lastName}`}
// })
// console.log(shortNames);

//exercice 4

var array = [1,"toto",34,"javascript",8];
var numbers = array.filter(function(num){
    return typeof num === "number";
});
console.log(numbers);

//5
 var numbers = [1,2,3,4,5,6,7,8];
 var even = numbers.filter(function(num){
     return num % 2 === 0
 });
 console.log(even);

 //6

 var cake =
[
     {
         name: "cake",
         flavor: "vanilla",
         status: "available"
     },
     {
         name: "brownie",
         flavor: "chocolate",
         status: "available"
     },
     {
         name: "pie",
         flavor: "strawberry",
         status: "available"
     },
     {
         name: "muffin",
         flavor: "pistachio",
         status: "available"
     },
     {
         name: "donut",
         flavor: "chocolate",
         status: "available"
     },
 ];
 var newthing = cake.filter().map(funtion(value))
 return {status: `${value.} ${value!}
 `}
 