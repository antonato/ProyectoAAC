// function suscribete(){
//     console.log(`Suscríbete a mi canal`);
// }

// suscribete();


//función que se autoinvoca
// (function suscribete(){
//     console.log(`Suscríbete a mi canal`);
// })();

// ((nombre) => {
//     console.log(`Suscríbete a mi canal ${nombre}`);
// })('Juanito');

((nombre = 'Ignacio') => {
    console.log(`Suscríbete a mi canal ${nombre}`);
})();