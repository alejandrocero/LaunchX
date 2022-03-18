const fetchPokemon = () => {
    const url = "https://pokeapi.co.api/v2/pokemon/chikorita";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokelog = data.sprites.front_default;
        console.log(pokeImg)
    })
}

fetchPokemon();