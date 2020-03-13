var contenido = document.querySelector('#contenido')

function tabla(datos){
    //console.log(datos)
    contenido.innerHTML = ''
    for (let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML += `
            <tr>
                <th scope="row">${ valor.id }</th>
                <td>${ valor.nombre }</td>
                <td>${ valor.email }</td>
                <td>${ valor.estado? "Activo" : "Eliminado" }</td>
            </tr>
        `
    }
}

function traer() {
    
    fetch('tabla.json')
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            tabla(datos) 
        
    })
}

