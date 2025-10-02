// //Esto es una funcion y sirve es centralizar la logica de los procedimientos y reutilizar varias veces, para identificar siempre tiene la paraba function texto (), esta es una tradicional y para llamarlas en este caso solo utilizamos el nombre de la funcion y los () - 'saludar()'

// //otro concepto importante q tiene las funciones, son los argumentos, los argumentos son los q esta dentro de (), todas las funciones tradicionales que son las palabras explicitras de FUNCTION internamente cuando se ejecuta tienen un objeto implicito q se llaman ARGUMENTS
// //La propiedad ARGUMENTS al momento de llamarla por un console.log, llama a todo los argumentos dentro del parentesis del nombre de la funcion
// //el retorno de una funcion en javascript lleva la palabra reservada RETURN, el cual retorna un valor a la linea de codigo que fue solicitada, al leer la primera linea, la segunda linea hasta llegar a la palabra reservada return, el codigo deja de ejecutarse


// function saludar ( nombre ){
//     // console.log ( arguments );
//     // console.log ('Hola ' + nombre );
//     // return [1, 2, 3, 4, 5];

// // aca llega la funcion, porq todo despues de la palabra RETURN nunca se va a ejecutar.
//     // console.log ('Soy un codigo que esta despues del return');
// };

// // esto se conoce como una funcion anonima porq no tiene nombre pero si llamamos a la funcion saludar2 se ejecuta, el beneficio, pueda ser reutilizable a la app, es como una medida de seguridad
// const saludar2 = function( nombre ){
//     console.log ( 'Hola ' + nombre );
// }

// const saludarFlecha = () => {
//     console.log ( 'Hola Flecha' );
// }

// //esta es otra forma de realizar una funcion y es buena practica siempre ponerlo en ()
// const saludarFlecha2 = ( nombre ) => {
//     console.log ( 'Hola ' + nombre );
// }


// const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' );
// console.log ( retornoDeSaludar );
// // saludar2( 'Fernando' );
// // saludarFlecha ();
// // saludarFlecha2 ( 'Melissa' );


function sumar (a, b) {
    return a + b;
}

const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}
//Ejercicios realizar lo mismo sin utilizar llaves {} y se llamara getOtraForma()
const getOtraForma = () => Math.random();

console.log ( getOtraForma() );

