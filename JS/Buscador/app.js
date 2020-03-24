const productos = [
    {nombre: 'Platanos', Valor: 500},
    {nombre: 'Manzana', Valor: 200},
    {nombre: 'Pera', Valor: 300},
    {nombre: 'Sandía', Valor: 100},
    {nombre: 'Frutillas', Valor: 200},
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


//funciones
const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${producto.nombre} - Valor ${producto.Valor} </li>`
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Producto no encontrado...</li>`
    }
}


//eventos
boton.addEventListener('click', filtrar);


formulario.addEventListener('keyup', filtrar);

filtrar();