
//exercice-1//
function sortLetters(string) {
    var array = string.split("");
    array = array.sort();
    array = array.join("");
    return array

}

console.log(sortLetters("konexio"));