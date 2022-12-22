
var express = require('express');
var router = express.Router();

const getterFunctions = require("../api/pokemon")
 
const getPokemon = getterFunctions.getPokemon;
const getAllPokemonInRange = getterFunctions.getAllPokemonInRange;
const getPokemonAbilities = getterFunctions.getPokemonAbilities;
const getPokemonTypeInfo = getterFunctions.getPokemonTypeInfo;



router.get('/findall', async function(req, res, next) {
    try {
        const limit = req.query.limit;
        const offset = req.query.offset;
        const range = await getAllPokemonInRange(limit, offset);
        res.send(range);
    } catch(err) {
        res.status(500);
        res.send(err);
    }
})

router.get('/:name', async function(req, res, next) {
    try {
        const pokemon = await getPokemon(req.params.name);
        res.send(pokemon);
    } catch(err) {
        res.status(500);
        res.send(err);
    }
    
});

router.get('/abilities/:name', async function(req, res, next) {
    try {
        const abilities = await getPokemonAbilities(req.params.name);
        res.send(abilities);
    } catch(err) {
        res.status(500);
        res.send(err);
    }
})

router.get('/types/:name', async function(req, res, next) {
    try {
        const types = await getPokemonTypeInfo(req.params.name);
        res.send(types);
    } catch(err) {
        res.status(500);
        res.send(err);
    } 
})



module.exports = router;
