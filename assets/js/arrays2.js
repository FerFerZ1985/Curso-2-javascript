// el metodo 'lenght' indica la cantidad de elementos que puede haber en 1 array
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log ('Largo:', juegos.length);

let primero = juegos [2 - 2];
let ultimo = juegos [juegos.length - 1]; //Este array es dinamico, osea que puedo lalmarlo de esta forma introduciendo operaciones matematicas, osea como se que lenght hace referencia a la cantidad de juegos q hay, en este caso 4, si queiro llamar al juego num 3, directamente con este codigo - 1 estaria resolviendo el problema

console.log ({ primero, ultimo});

juegos.forEach ( (elemento, indice, arr) => {
    console.log ({elemento, indice, arr});
});

let nuevaLongitud = juegos.push ( 'F-Zero' ); //este metodo es para insertar un nuevo elemento a los arrays el ".push"
//al ejecutarlo podemos ver q, en vez de q la longitud sea 4, ahora es 5 y llamando a la varaible JUEGOS, podemos verlo en consola al nuevo juego
console.log ({nuevaLongitud, juegos});  

// ".unshift" es el metodo (en este caso del ejemplo) el cual podemos agregar un juego mas pero al principio
nuevaLongitud = juegos.unshift ( 'Fire Emblem' );
console.log ({nuevaLongitud, juegos});

//para borrar el utlimo juego utilizamos el metodo ".pop"
let juegoBorrado = juegos.pop ( 'F-Zero' );
console.log ({ juegoBorrado, juegos});

//para borrar 1 o 2 o 3 juegos utilizamos el metodo ".splice"
let pos = 1;
console.log ( juegos );
let juegoBorrados = juegos.splice ( pos, 2);
console.log ({juegoBorrados, juegos});

//para saber cual es el indice de cada juego o de 1 juego utilizamos el metodo "indexOf('especificamos lo que buscamos')"
let metroidIndex = juegos.indexOf('Metroid');
console.log ({ metroidIndex});

