const PeliculaUno = {
    nombre: 'harry',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
    }
}


class Pelicula {

    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
    }

}

class Serie extends Pelicula{

    constructor(nombre, id, cap){
        super(nombre, id);
        this.cap=cap;
    }

    reproducirCapitulo(){
        return `reproduciendo capitulo ${this.cap}...de ${this.nombre}`;
    }
}

const peliculaUno = new Pelicula('harry',1);
const peliculaDos = new Pelicula('araña', 2);
const serieUno = new Serie('Dexter', 3, 55);

console.log(peliculaUno);
console.log(peliculaDos);
console.log(serieUno.reproducirCapitulo());
