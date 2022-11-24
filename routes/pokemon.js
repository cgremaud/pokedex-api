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
    const abilities = pokemon.abilities;
    return abilities;   
}

router.get('/:name', async function(req, res, next) {
    const pokemon = await getPokemon(req.params.name);
    res.send(pokemon);
});

router.get('/abilities/:name', async function(req, res, next) {
    const abilities = await getPokemonAbilities(req.params.name);
    res.send(abilities);

})

module.exports = router;
