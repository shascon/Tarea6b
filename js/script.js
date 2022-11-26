
//Contastante que toma datos y envia a index

const pokemonContenedor = document.querySelector(".pokemon");


//Función con fetch para api

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


// Función reccorre con for ocupando limit
const personaje = () =>{
  fetchpersonajes = []
  for (let i = 1; i <= 20; i++) {
      fetchPokemon(i);
  }
}



const NewPokemon = (pokemon) => {

// Se crea div de carta llamado Carta
  const carta = document.createElement("div");
  carta.classList.add("carta");

// Se crea contenedor de la carta pokemosn
  const cartacontenedor = document.createElement("div");
  cartacontenedor.classList.add("carta-contendor");

// Nodo de refrrencia carta
  carta.appendChild(cartacontenedor);

// Se crea el div para mostrar personaje donde contendra los datos
  const personaje = document.createElement("div");
  personaje.classList.add("personaje-block");

// Se crea div con donde contendrá la imagen 
  const imgcontenedor = document.createElement("div");
  imgcontenedor.classList.add("img-container");

// Se crea variable para traer imagen de URL y posicionar en eqiqueta img src

  const imegen = document.createElement("img");
  imegen.src = pokemon.sprites.front_default;

// Nodo de refrrencia de la imegen

imgcontenedor.appendChild(imegen);

// Se crea etiqueta p para refrencia nombre  

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


