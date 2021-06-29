
 var axios = require("axios");
// var countriesNames = [];


// axios.get("https://restcountries.eu/rest/v2/all").then(function (res) {
// 	var data = res.data;
//     //console.log(data);

//     countriesNames = data.map(function(country){
//         return country.name
//     })
//     console.log(countriesNames.join("-"));
// });

//exercice 2

// function getFact(){
//     axios.get("https://api.chucknorris.io/jokes/random").then(function(res,data){
// 	    var data = res.data;
//         console.log(data.value);
//     }); 

// };    
// getFact()
 
// exercice 3
function catchPokemon(nombre){
    //(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    axios.get("https://pokeapi.co/api/v2/pokemon/" + nombre).then(function(res,data){
	    var data = res.data;
        console.log(data.name);
    }); 
}
    catchPokemon(78);

