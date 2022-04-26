




 const datos = [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit   molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae eaoresue\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam on ebitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem oloribus    vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident    rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt oluptatem rerum illo velit"
    },
    {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem    omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
    ];

    let con = document.querySelector('#con')

    // function trae() {
    //   fetch("tabla.json")
    //       .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
    //       .then(dato => {
    //           nombre(dato)
              
              const getDatos = () => {
    
                return new Promise((resolve, reject) => {
    
                  setTimeout(() =>{
    
                    resolve (datos);
                  }, 3000);
    
                })
    
              }
    
          
    
    
    getDatos().then ((datos) => console.log(datos));


function nombre(datos) {

    con.innerHTML = ''
    datos.map(elemento => {

        con.innerHTML += `                
      
                <div class="card-father col-6 col-md-6 col-lg-4 mb-3 ">
                <div class="card d-flex flex-row shadow rounded">
                  <div class="card-body d-flex justify-content-center flex-column align-items-center p-0">
                            <p class="h5 m-0">${elemento.id}</p>
                            <h2 class="card-title h5 m-1">${elemento.title}</h2>
                  </div>  
                  
                  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1${elemento.id}">  
  detalles
</button>

<!-- Modal -->
<div class="modal fade" id="modal1${elemento.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${elemento.body}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>        
                `
    })
}
