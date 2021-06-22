
//1//
function calculate(number1, operateur, number2) {
    if (operateur === "+"){
        console.log(number1 + number2);
    }if (operateur === "-") {
        console.log(number1 - number2);
    }if (operateur === "/") {
        console.log(number1 / number2);
    }if ( operateur === "%") {
        console.log(number1 % number2);
    }
}
calculate(4,"+//",2);
console.log(process.argv);

calculate(parseInt(process.argv[2]),process.argv[3],parseInt(process.argv[4]));

//2//

