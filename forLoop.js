//exo 1

var total = 0;

for (var i = 5; i<= 10; i++) {
    total = total + (i*i) ;
} 

console.log(total);

//

//2
var result = 0;

for (var i = 100; i<= 1000; i++) {
    if (i % 7 === 0) {
        result = result + 1 ;
    }
}

console.log(result);

//3
var somme = 0;

for (var i = 1; i <= 20; i++ ) {
    var resultLancer = Math.floor(Math.random()*(1 + 6 +1)+1);
    if (resultLancer >= 5) {
        somme = somme + resultLancer;
    }
}   

console.log(somme);

 //

 //4
 var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);
 
//5
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

//6

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);



