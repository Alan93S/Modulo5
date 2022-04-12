let contenido = document.querySelector('.contenido')

// PARA PODER UTILIZAR ANTERIOR Y SIGUIENTE 

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

// DESDE DONDE SE EMPIEZA A CONTAR Y EL LIMITE QUE MOSTRARA 

let offset = 1;
let limit = 8;

/*EVENTO DE CLICKEAR ANTERIOR CON UN IF QUE LE INDICA QUE NO PUEDE IR AL ANTERIOR SI SE 
 EMPIEZA EN EL PRIMERO (1) Y EL EVENTO SIGUIENTE, DONDE SE MUESTRA LOS SIGUIENTES 9 POST */

previous.addEventListener("click", () => {
    if (offset != 1) {
      offset -= 9;
      removeChildNodes(contenido);
      traerPokemons(offset, limit);
    }
  });
  
  next.addEventListener("click", () => {
    offset += 9;
    removeChildNodes(contenido);
    traerPokemons(offset, limit);
  });


// FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN

  
  function traerPokemon(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(resultadoTabla => resultadoTabla.json()) 
        .then((datos) => {
            tabla(datos);
        });
}
// FUNCION QUE NOS INDICARA CUANTOS POKEMONES SE IRAN SUMANDO O MOSTRANDO
function traerPokemons(offset, limit){
    for (let i = offset; i <= offset + limit; i++){
         traerPokemon(i);
    }
}
// ACA ES DONDE SE ARMA LA ESTRUCTURA, datos ES EL NOMBRE QUE LE DAMOS, SPRITES, NAME E ID DE LA LINEA 23 A 25 SON DATOS EXCLUSIVOS DE LA API QUE NOS DAN
// EL NUMERO NOMBRE E IMAGEN DEL POKEMON
let pokemones = [];
function tabla(datos) {
    pokemones.push(datos);
    contenido.innerHTML += `
    <div class="card-father col-12 col-md-6 col-lg-4 mb-3 ">
				<div class="card d-flex flex-row shadow rounded">
					<img src="${ datos.sprites.front_default}" class="card__img img-fluid" alt="">
					<div class="card-body d-flex justify-content-center flex-column align-items-center p-0">
                    <p class="h5 m-0">#${datos.id}</p>
                    <h2 class="card-title h5 m-1">${datos.name}</h2>
					</div>
					<div class="d-flex flex-column justify-content-center p-2">
						<a href="#" class="btn btn-primary h6 card__button mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Más detalles">Detalles</a>
						<a href="#" class="btn btn-danger card__button" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos" onclick="agregarFavorito(${datos.id})">Favorito</a>
					</div>
				</div>
			</div>
    `
}


function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// SE LLAMA LA FUNCION, SE CAMBIA EL 10 POR EL offset y limit

traerPokemons(offset, limit);
let favoritos = []
function agregarFavorito(idPokemon){
    nuevoFavorito = pokemones.filter(item=>item.id === idPokemon)
    let favoritoExiste = favoritos.some(item=>item.id === idPokemon)
    if (favoritoExiste){
        alert("El producto ya esta en los favoritos");
    }else{
        favoritos.push(nuevoFavorito[0])
    }
    
    console.log("ejecutando")
    console.log(favoritos);
  imprimirFavorito()
}

function imprimirFavorito(){
    document.querySelector(".favoritos").innerHTML= "";
    favoritos.forEach(datos=>{
        document.querySelector(".favoritos").innerHTML += `
    <div class="card-father col-12 col-md-6 col-lg-4 mb-3 ">
				<div class="card d-flex flex-row shadow rounded">
					<img src="${ datos.sprites.front_default}" class="card__img img-fluid" alt="">
					<div class="card-body d-flex justify-content-center flex-column align-items-center p-0">
                    <p class="h5 m-0">#${datos.id}</p>
                    <h2 class="card-title h5 m-1">${datos.name}</h2>
					</div>
					<div class="d-flex flex-column justify-content-center p-2">
						<a href="#" class="btn btn-primary h6 card__button mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Más detalles">Detalles</a>
						<a href="#" class="btn btn-danger card__button" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos" onclick="agregarFavorito(${datos.id})">Favorito</a>
					</div>
				</div>
			</div>
    `

    })
}
