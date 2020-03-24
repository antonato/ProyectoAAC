var objeto = {
    nombre:'HTML',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'Introducción',
        videos: 20
    }
};

var arrayObjectos = [
    {
        nombre: 'Html',
        estado: true
    },
    {
        nombre: 'Css',
        estado: true
    },
    {
        nombre: 'Js',
        estado: false
    }
]

// console.log(arrayObjectos[0].nombre);

for(let indice of arrayObjectos){
    console.log(indice.nombre);
}