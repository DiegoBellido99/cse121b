const PokemonsElements = document.getElementById("listPokemons");

let pokemonArray = [];

function displayPokemons (generalPokemons){
    generalPokemons.forEach(pokemons=> {
        const article = document.createElement("article");

        const h4 = document.createElement("h4");
        h4.textContent = pokemons.name;

        const img = document.createElement("img");
        img.setAttribute("src",pokemons.sprites.front_default);
        img.setAttribute("alt",pokemons.name);
        
        const h3 = document.createElement("h3");
        h3.textContent= `Weight : ${pokemons.weight}`;

        const h2 = document.createElement("h2");
        h2.textContent = `Movements : `;

        const ul = document.createElement("ul");

        const movimientosArray= pokemons.moves;

        for(i=0 ;i< 4 ;i++){
            const li = document.createElement("li");

            li.textContent= movimientosArray[i].move.name;
            ul.appendChild(li);
        }

        article.appendChild(h4);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(h2);
        article.appendChild(ul);

        PokemonsElements.appendChild(article);
    });
}


    

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
        let movimeintos = pokemon.moves;
        movimeintos.forEach(element => {
            console.log(element.move.name)
        });
        
        
    });
}


const reset = ()=>{
    PokemonsElements.innerHTML= "";
};


const filterPokemons = (pokemones)=>{

    reset();

    const choices = document.getElementById("choises").value;

    switch(choices){
        case "grass":
            displayPokemons(pokemones.filter(pokemo=>pokemo.types[0].type.name ==='grass'));
            break;
        
        case "fire":
            displayPokemons(pokemones.filter(pokemo=>pokemo.types[0].type.name ==='fire'));
            break;
        
        case "water":
            displayPokemons(pokemones.filter(pokemo=>pokemo.types[0].type.name ==='water'));
            break;
        
        case "bug":
            displayPokemons(pokemones.filter(pokemo=>pokemo.types[0].type.name ==='bug'));
            break;
        
        case "normal":
            displayPokemons(pokemones.filter(pokemo=>pokemo.types[0].type.name ==='normal'));
            break;
        
        case "all":
            displayPokemons(pokemones);
            break;
        
        default:
            break;
    }
}

document.getElementById("choises").addEventListener("change",()=>{filterPokemons(pokemonArray)});

getPokemonData();
