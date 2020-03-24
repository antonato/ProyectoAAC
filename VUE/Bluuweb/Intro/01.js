const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: 
        [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Plátano', cantidad: 11}
        ],
        nuevaFruta: '',
        nuevaCantidad: '',
        total: 0
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: this.nuevaCantidad
            });
            this.nuevaFruta = '';
            this.nuevaCantidad = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
}) 