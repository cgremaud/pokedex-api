var express = require('express');
var router = express.Router();

const getPokemon = async function(name = "ditto") {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json();
    const abilities = pokemon.abilities;
    return pokemon;    
}

const getPokemonAbilities = async function(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json();
    const result = {};
    result.abilities = pokemon.abilities;
    result.name = name;
    return result;   
}

const getPokemonTypeInfo = async function(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
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
      result.types.push(type);
    } 
    return result;
}

router.get('/:name', async function(req, res, next) {
    const pokemon = await getPokemon(req.params.name);
    res.send(pokemon);
});

router.get('/abilities/:name', async function(req, res, next) {
    const abilities = await getPokemonAbilities(req.params.name);
    res.send(abilities);
})

router.get('/types/:name', async function(req, res, next) {
    const types = await getPokemonTypeInfo(req.params.name);
    res.send(types);
})

module.exports = router;
