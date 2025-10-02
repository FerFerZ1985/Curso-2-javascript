// Son objetos muy parecido a un alista de informacion que contienen un grupo de elementos internamente, usulamente esa informacion  es del mismo tipo de dato
//La forma de reocnocer un Arrays, estan dentro de corchetes []


// //const arr = new Array (10); //esta es una forma de hacerlo
// const arr = []; // esta seria la forma mas practica
// console.log( arr );

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger']; // esta tambien es una forma corecta
console.log( {videoJuegos} );

console.log ( videoJuegos[0] ) //esta forma hago referencia a la primera posicion osea Mario 3

let arregloCosas = [ //Donde esat la operacion de suma, al ejectuarlo lo muestra resuelve, tambien puede agreagr objetos literales y function
    true,
    123,
    'Fernando',
    1 + 2,
    function (){},
    ()=>{},
    { a: 1} ,
    ['x', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Whilly',
        'Woodman'
    ]]
];

// console.log ({ arregloCosas });
//si quiero llamar un arreglo dentro de un arreglo utilizo de esta forma los [] y si de ese arreglo hay otro, agrego otros [] y llamarlo a ese arrays
// esto se puede realizar de una forma mas sencilla 
console.log ( arregloCosas [7][4][1] ); 

