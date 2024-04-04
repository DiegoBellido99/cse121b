const PokemonsElements = document.getElementById("listPokemons");

let pokemonArray = [];

/*
function displayPokemons (generalPokemons){
    generalPokemons.forEach(pokemons=> {
        const article = document.createElement("article");

        const h4 = document.createElement("h4");
        h4.textContent = pokemons.name;

        const img = document.createElement("img");
        img.setAttribute("src",pokemon[sriptes].frontdefaul);
    });
}
*/

    

async function getPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
  
            pokemonArray = await Promise.all(data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return pokemonData;
        }));
  
        return pokemonArray;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return [];
    }
  }
  
  // Uso de la función
  getPokemonData()
    .then(pokemonArray => {
        console.log('Pokémon array:', pokemonArray);
        printPokemonNames();

    })
    .catch(error => {
        console.error('Error:', error);
    });
  



function printPokemonNames(){
    pokemonArray.forEach((pokemon)=>{
        console.log(pokemon.name);
    });
}

printPokemonNames();

