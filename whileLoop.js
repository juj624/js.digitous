
//1
var min = 50;
var max = 200;

while ( min <= max ) {
    if (min % 2 === 0) {
         console.log(min)
    }
    min++;
}

//2

var dice = null;
var count = 0;

while ( dice <= 6) {
     dice = Math.floor(Math.random()*(1 + 6 +1)+1);
    if (dice <= 6){
     count++
    }
}
console.log(count);