var contenido = document.querySelector('#contenido')

function traer() {
    
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        contenido.innerHTML =
        `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-flui rounded-circle">
            <p>Nombre: ${data.results['0'].name.last}</p>
        `
    })
}