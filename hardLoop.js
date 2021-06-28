//Nested loop

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let count = 0;
for(let i = 0; i< words.length; i++) {
    //letters.push(words[i.split(""));
      let letters = words[i];
      //console.log(letters);
  for(let j =0; j<letters[j].length; i++) {
    if (letters[j] === "o"){
        count++;
    }
  }
}
console.log(count);