var express = require('express');
var app = express();
var pokemonRouter = express.Router();

var PokemonDB = require('../client/db/pokemonDB');
var query = new PokemonDB();


//pokemon index
pokemonRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});




module.exports = pokemonRouter;