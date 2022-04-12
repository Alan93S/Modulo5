const contenido = document.querySelector('.contenido')
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

// MUESTRA EL LIMITE DE POKEMOS POR PANTALLA
let offset = 1;
let limit = 8;

// EVENTO DE AL CLICKEAR ANTERIOR MUESTRE LOS 9 ANTERIORES A MENOS QUE ESTE EN LA PRIMERA PAGINA 

previous.addEventListener("click", () => {
    if (offset != 1) {
      offset -= 9;
      removeChildNodes(contenido);
      traerPokemons(offset, limit);
    }
  });

  // EVENTO DE AL CLICKEAR SIGUIENTE MUESTRE LOS 9 SIGUIENTESA 

  next.addEventListener("click", () => {
    offset += 9;
    removeChildNodes(contenido);
    traerPokemons(offset, limit);
  });
    

function traerPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then((datos) => {
            tabla(datos);
        });

}
// FUNCION PARA QUE NOS MUESTRE UNA CANTIDAD ESPECIFICA DE POKEMONES
function traerPokemons(offset, limit){
    for (let i = offset; i <= offset + limit; i++){
         traerPokemon(i);
    }
}
// ACA ES DONDE SE ARMA LA ESTRUCTURA, datos ES EL NOMBRE QUE LE DAMOS, SPRITES, NAME E ID DE LA LINEA 23 A 25 SON DATOS EXCLUSIVOS DE LA API QUE NOS DAN
// EL NUMERO NOMBRE E IMAGEN DEL POKEMON
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
                        <a href="#" class="btn btn-primary h6 card__button mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Más detalles">Detalles</a>
                        <a href="#" class="btn btn-danger card__button" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos">Favorito</a>
                    </div>
                </div>
            </div>
    `

    
}

// SE LLAMA LA FUNCION Y SE INDICA CUANTOS DATOS SE MOSTRARA EN LA PANTALLA, EN ESTE CASO 10, SI SE CAMBIA SE MUESTRAN MAS O MENOS


// EVENTO QUE HACER REMOVER LOS PRIMEROS 9 CARDS Y NO SE VAYAN ACUMULANDO DENTRO DE LA MISMA Y VICEVERSA

function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
  

traerPokemons(offset, limit);
