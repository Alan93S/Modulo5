let contenido = document.querySelector('.contenido')

function traerPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then((datos) => {
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
function tabla(datos) {
        
    // contenido.innerHTML += `                
    //         <tr>
            
    //             <td> <img src=' ${ datos.sprites.front_default }'/></td>
    //             <th scope="row">$datos.name</th>
    //             <td>${ datos.id }</td>

    //         </tr>
                
    //         `

    contenido.innerHTML += `
    <div class="card-father col-12 col-md-6 col-lg-4 mb-3">
				<div class="card d-flex flex-row shadow rounded">
					<img src="${ datos.sprites.front_default}" class="card__img img-fluid" alt="">
					<div class="card-body d-flex justify-content-center align-items-center p-0">
                    <h2 class="card-title h5 m-1">${datos.name}</h2>
					<p class="h5 m-0">#${datos.id}</p>
					</div>
					<div class="d-flex flex-column justify-content-center p-2">
						<a href="#" class="btn btn-primary card__button mb-1">Detalles</a>
						<a href="#" class="btn btn-danger card__button">Favorito</a>
					</div>
				</div>
			</div>
    `
}

// SE LLAMA LA FUNCION Y SE INDICA CUANTOS DATOS SE MOSTRARA EN LA PANTALLA, EN ESTE CASO 10, SI SE CAMBIA SE MUESTRAN MAS O MENOS

traerPokemons(10);
