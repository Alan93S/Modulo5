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
        
    contenido.innerHTML += `                
            <tr>
            
                <td> <img src=' ${ datos.sprites.front_default }'/></td>
                <th scope="row">${ datos.name }</th>
                <td>${ datos.id }</td>

            </tr>
                
            `
}

// SE LLAMA LA FUNCION Y SE INDICA CUANTOS DATOS SE MOSTRARA EN LA PANTALLA, EN ESTE CASO 10, SI SE CAMBIA SE MUESTRAN MAS O MENOS

traerPokemons(10);
