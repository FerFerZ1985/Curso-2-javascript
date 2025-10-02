
const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if ( dia === 0 || dia === 6 ) {
//POdemos hacerlo mas simple de esta manera
// if ( [0,6].includes ( dia ) ) {
//     console.log ( 'Fin de semana' );
//     horaApertura = 9;
// } else {
//     console.log ( 'Dia de semana' );
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes ( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta Abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`// al poner los BACKSTICK(``) es para concatenar poniendo la condicion ${ +variable } 
// } 

mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log ({ horaApertura, mensaje });




