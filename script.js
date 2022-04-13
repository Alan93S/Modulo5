let contenido = document.querySelector('.contenido')

function traerPokemon(id) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then((datos) => {
            pokemones.push(datos);// SE MOVIO PARA PODER OCUPAR FUNCION TABLA SIN MODIFICAR ORIGINAL
            tabla(datos);
        });
}
// FUNCION PARA QUE NOS MUESTRE UNA CANTIDAD ESPECIFICA DE POKEMONES
function traerPokemons(number){
    for (let i = 1; i <= number; i++){
         traerPokemon(i);
    }
}
// ACA ES DONDE SE ARMA LA ESTRUCTURA, datos ES EL NOMBRE QUE LE DAMOS, SPRITES, NAME E ID DE LA LINEA 23 A 25 SON DATOS EXCLUSIVOS DE LA API QUE NOS DAN
// EL NUMERO NOMBRE E IMAGEN DEL POKEMON
let pokemones = [];
function tabla(datos) {
    
    contenido.innerHTML += `
    <div class="card-father col-12 col-md-6 col-lg-4 mb-3 ">
				<div class="card d-flex flex-row shadow rounded">
					<img src="${ datos.sprites.front_default}" class="card__img img-fluid" alt="">
					<div class="card-body d-flex justify-content-center flex-column align-items-center p-0">
                    <p class="h5 m-0">#${datos.id}</p>
                    <h2 class="card-title h5 m-1">${datos.name}</h2>
					</div>
					<div class="d-flex flex-column justify-content-center p-2">
						<a class="btn btn-primary h6 card__button mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Más detalles">Detalles</a>
						<a class="btn btn-danger card__button" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos" onclick="agregarFavorito(${datos.id})">Favorito</a>
					</div>
				</div>
			</div>
    `
}

// SE LLAMA LA FUNCION Y SE INDICA CUANTOS DATOS SE MOSTRARA EN LA PANTALLA, EN ESTE CASO 10, SI SE CAMBIA SE MUESTRAN MAS O MENOS

traerPokemons(10);
let favoritos = []
function agregarFavorito(idPokemon){
    nuevoFavorito = pokemones.filter(item=>item.id === idPokemon)
    let favoritoExiste = favoritos.some(item=>item.id === idPokemon)
    if (favoritoExiste){
        alert("El pokémon ya esta en tus favoritos");
    }else{
        favoritos.push(nuevoFavorito[0])
    }
    
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
						<a class="btn btn-primary h6 card__button mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Más detalles">Detalles</a>
						<a class="btn btn-danger card__button" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos" onclick="eliminarFavorito(${datos.id})">Eliminar</a>
					</div>
				</div>
			</div>
    `
    })
}
function eliminarFavorito(idPokemon) {
    favoritos = favoritos.filter(item => item.id != idPokemon)
    document.querySelector(".favoritos").innerHTML= "";
    imprimirFavorito()
}

const btnSearch =  document.getElementById("btn-search")

btnSearch.addEventListener("click", (e) => {

   const inputSearch = document.getElementById("input-search")

   const textSearch = inputSearch.value

   const newPokemones = pokemones.filter(function(pokemon){

    if(pokemon.name.includes(`${textSearch}`)) {

        return  pokemon 
    }


   })

   contenido.innerHTML = ""

   newPokemones.forEach(function(pokemon){

    tabla(pokemon)

   }
   
   
   )
   
})




