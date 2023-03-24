"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var apiUrl = 'https://pokeapi.co/api/v2/pokemon';
axios_1.default.get(apiUrl).then(function (response) {
    var pokemonList = response.data.results;
    console.log(pokemonList);
});
