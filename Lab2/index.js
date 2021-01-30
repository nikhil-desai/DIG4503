// Using the module Axios
const axios = require('axios');

// Getting the pokemon JSON data
axios('https://pokeapi.co/api/v2/pokemon/psyduck')
    // If the API gets the data, THEN perform:
    .then(function (response) {
        // Assigning the JSON data to a variable
        const pokemon = response.data;

        // Logging the pokemon data in the console
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    // If the API doesn't get the data:
    .catch(function (error) {
        // Logging the error
        console.log("Error: " + error);
    });

