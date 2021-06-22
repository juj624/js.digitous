
//1
//var min = 50;
//var max = 200;

//while ( min <= max ) {
   // if (min % 2 === 0) {
       //  console.log(min)
  //  }
    //min++;
//}
var i = 1 ;
while(i<=200) {
    console.log(i)
    i+= 2;
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

//03

var ussainBolt = 0;
    tysonGay = 0;

    while (susainBolt <100 && tysonGay < 100) {
        ussainBolt += Math.floor(Math.random()*10) +1;
        tysonGay += Math.floor(Math.random()*10)+1;
        console.log(ussainBolt,tysonGay);
    }
    if (ussainBolt > tysonGay) {
        console.log("winner is ussainBolt");
    }
    else if (tysonGay > ussainBolt) {
        console.log("winner is tyson");
    }
    else {
        console.log("they are equal");
    }