let contenido = document.querySelector('#contenido')

function traer() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then(datos => {
            tabla(datos)
            console.log (datos)

        })// VAMOS A MOSTRAR LA INFORMACIÓN
}

function tabla(datos) {

    contenido.innerHTML = ''
    datos.results.map(elemento => {

        contenido.innerHTML += `                
                <tr>
                    <th scope="row">${ elemento.name }</th>
                    <td>${ elemento.tipo }</td>
                    <td>${ elemento.numero }</td>
                </tr>
                
                `
    })
}

traer();

