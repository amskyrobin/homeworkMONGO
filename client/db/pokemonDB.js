var MongoClient = require('mongodb').MongoClient;


var PokemonDB = function(){
  this.url = 'mongodb://localhost:27017/pokemon_db'
};


PokemonDB.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('pokemon');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
        console.log('connected');
      }
    });
  }
}

module.exports = PokemonDB;