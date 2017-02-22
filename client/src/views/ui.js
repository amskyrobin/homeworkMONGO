var UI = function() {
  var pokemon = new Pokemon();
  pokemon.all(function(result){
    this.render(result);
  }.bind(this));
  
  this.createForm();
},



UI.prototype = {
    
    
    createForm: function(){  //ADDED
      //create the form and a div
      var div = document.createElement('div');
      var form = document.createElement('form');
      var body = document.querySelector('body');

      //append input boxes to the form
      var titleInput = document.createElement('input');
      titleInput.setAttribute("name", "title");
      form.appendChild(titleInput);

      var genreInput = document.createElement('input');
      genreInput.setAttribute("name", "genre");
      form.appendChild(genreInput);

      var actorsInput = document.createElement('input');
      actorsInput.setAttribute("name", "actors");
      form.appendChild(actorsInput);

      //append a button to submit the form
      var button = document.createElement('button');
      button.type = 'submit';
      button.innerText = 'Add Pokemon';
      form.appendChild(button);

      //add event handler to the onSubmit event of the form
      form.onsubmit = function(e){
        e.preventDefault();
        var newPokemon = {
          name: e.target.name.value,
          type: e.target.type.value,
          genre: e.target.genre.value;
        }

        var pokemon = new Pokemon(); 
        pokemon.add(newPokemon, function(data){
          console.log(data);
        });

      }

      div.appendChild(form);
      body.insertBefore( div, body.firstChild );
    }
}