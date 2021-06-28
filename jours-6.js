//exercice 1

function formaDate(string){
    var date = new Date(string);
    var years = date.getFullYear();
    var days = date.getDate();
    var month =date.getMonth()+1;

    if(month < 10) {
        month = "0" + month;
    }if(days < 15){
        days= "0" + days;
    }
    return `${days}/${month}/${years}`;
}

console.log(formaDate("2012-06-04"));

//exercice 2

// function calculateAge(string){
//     var birthday  = new Date(string).getFullYear();
//     var time = new Date().getFullYear();
//     var age = time - birthday;
//     return age;
// }

// console.log(calculateAge("1995-10-31"));
// function calculateAge(string){
//     var birthday  = new Date(string);
//     var birthdayYears = new Date(string).getFullYear();
//     var birthdayDays = new Date(string).getDate();
//     var birthdayMonth = new Date(string).getMonth();

//     var today = new Date();

//     var years = today.getFullYear() - birthdayYears;
    

// if(  today.getMonth() < birthdayMonth  ){
//     years = years - 1;
// }
// return years;
// }
// console.log(calculateAge("1995-10-31"));

// //exercice 3
 var prompt = require("prompt")
 prompt.start();

function checkProfile(string){
    var properties = [
        {
          name: "email",
          validator: /^[a-zA-Z\s\-]+$/, 
          warning: "l'email doit contenir que des minuscule et un @ merci bien !! "
        }
    ]
   
};
checkProfile()