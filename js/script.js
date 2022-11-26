
//Contastante que toma datos y envia a index

const pokemonContenedor = document.querySelector(".pokemon");




const fetchPokemon = (id)=> {
    try{

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
        NewPokemon(data);
        });
    }

    catch (error){
        console.log(error);
    }
}



const personaje = () =>{
  fetchpersonajes = []
  for (let i = 1; i <= 20; i++) {
      fetchPokemon(i);
  }
}



const NewPokemon = (pokemon) => {


  const carta = document.createElement("div");
  carta.classList.add("carta");


  const cartacontenedor = document.createElement("div");
  cartacontenedor.classList.add("carta-contendor");


  carta.appendChild(cartacontenedor);


  const personaje = document.createElement("div");
  personaje.classList.add("personaje-block");


  const imgcontenedor = document.createElement("div");
  imgcontenedor.classList.add("img-container");



  const imegen = document.createElement("img");
  imegen.src = pokemon.sprites.front_default;



  imgcontenedor.appendChild(imegen);



  const nombre = document.createElement("p");
  nombre.classList.add("nombre");
  nombre.textContent = pokemon.name;

// Se ordena los cada uno de los las refrecncia
  personaje.appendChild(imgcontenedor);
  personaje.appendChild(nombre);
  cartacontenedor.appendChild(personaje);
  pokemonContenedor.appendChild(carta);
}

personaje();


