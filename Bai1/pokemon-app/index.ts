import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

axios.get(apiUrl).then((response) => {
  const pokemonList = response.data.results;
  console.log(pokemonList);
});
