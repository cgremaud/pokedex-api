const getPokemon = async function(name = "ditto") {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();
        return pokemon;
    } catch(err) {

    }    
}

const getAllPokemonInRange = async function(limit = 100, offset= 0) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemon = await response.json();
        return pokemon;
    } catch(err) {

    }
}

const getPokemonAbilities = async function(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();
        const result = {};
        result.abilities = pokemon.abilities;
        result.name = name;
        return result;
    } catch(err) {

    }
}

//TODO modify this to include past type data and maybe correlate to which type it had in which generation
const getPokemonTypeInfo = async function(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();
        const types = pokemon.types;
        let result = {
            name: name, 
            types: []
        };
        let type;
        let typeResult;
        for (let i = 0; i < types.length; i++) {
        typeResult = await fetch(types[i].type.url); 
        type = await typeResult.json(); 
        console.log(type) 
        result.types.push({
                name: types[i].type.name,
                typeInfo: type
            });
        } 
        return result;
   } catch(err) {
    
   }
}

export default pokemon;