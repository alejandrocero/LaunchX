const fetchPokemon = () => {
  let pokeName = document.getElementById("pokeName").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        alert("No existe ese pokemon.");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        document.getElementById("name").innerHTML = data.name.toUpperCase();
        document.getElementById("pokeImg").src = pokeImg;
        if (data.types.length < 2) {
          document.getElementById("type1").innerHTML =
            data.types[0].type.name.toUpperCase();
          document
            .getElementById("type1")
            .classList.replace(
              document.getElementById("type1").classList.item(0),
              data.types[0].type.name
            );
        } else {
          document.getElementById("type1").innerHTML =
            data.types[0].type.name.toUpperCase();
          document
            .getElementById("type1")
            .classList.replace(
              document.getElementById("type1").classList.item(0),
              data.types[0].type.name
            );
          document.getElementById("type2").innerHTML =
            data.types[1].type.name.toUpperCase();
          document
            .getElementById("type2")
            .classList.replace(
              document.getElementById("type2").classList.item(0),
              data.types[1].type.name
            );
        }
        document.getElementById("hp").innerHTML =
          "HP: " + data.stats[0].base_stat;
        document.getElementById("attack").innerHTML =
          "ATTACK: " + data.stats[1].base_stat;
        document.getElementById("defense").innerHTML =
          "DEFENSE: " + data.stats[2].base_stat;
        document.getElementById("sattack").innerHTML =
          "S.ATTACK: " + data.stats[3].base_stat;
        document.getElementById("sdefense").innerHTML =
          "S.DEFENSE: " + data.stats[4].base_stat;
        document.getElementById("speed").innerHTML =
          "SPEED: " + data.stats[5].base_stat;
      }
    });
};
