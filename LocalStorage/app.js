//LocalStorage: Guarda cadena de texto, clave => valor
//SET => Guardando
//GET => Obtener


const nombre = 'Ignacio';

localStorage.setItem('nombreUsuario', nombre);


//Variables Globales
const BtnBotones = document.querySelector('#BtnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

(()=>{

    BtnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);
})();

(()=>{

    const color = localStorage.getItem('colorFondo');
    if(color===null){
        fondo.className = 'bg-dark';
    }else{
        fondo.className = color;
    }

})();

function agregarBotones(e){
    e.preventDefault();
    //console.log('Diste click en el botón negro');
    botones.innerHTML = `<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>`
}

function delegacion(e){
    const colorBtn = e.target.classList[1];

    switch(colorBtn){

        case('btn-primary'):
            fondo.className = 'bg-primary';
            localStorage.setItem('colorFondo', "bg-primary");
            break;
        case('btn-secondary'):
            fondo.className = 'bg-secondary'
            localStorage.setItem('colorFondo', "bg-secondary");
            break;
        case('btn-danger'):
            fondo.className = 'bg-danger'
            localStorage.setItem('colorFondo', "bg-danger");
            break;
        case('btn-success'):
            fondo.className = 'bg-success'
            localStorage.setItem('colorFondo', "bg-success");
            break;
        case('btn-warning'):
            fondo.className = 'bg-warning'
            localStorage.setItem('colorFondo', "bg-warning");
            break;

    }
}