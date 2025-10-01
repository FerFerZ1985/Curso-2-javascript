
let a = 5;

// //los parentesis del IF indica que debe ir una funcion y espera un valor booleano, IF seria como si dijera SI ESTO ES TA TAL, El ELSE esc como si dijera SI NO da este resultado
// if ( a > 10 ) {
//     console.log ( 'A es mayor a 10' );
// }

// console.log ( 'Fin del programa' );

const hoy = new Date();
let dia = hoy.getDay();

console.log ({ dia });

if ( dia === 0 ){
    console.log ( 'Domingo' );
} else if ( dia === 1 ) {
    console.log ( 'Lunes' );

// if (dia ==== 2) {
//     console.log ( 'Lunes' );    
// } else {
//     console.log ( 'No es lunes ni Domingo' );
// }

}else if ( dia === 2 ){
    console.log ( 'Martes' );
} else {
    console.log ( 'No es lunes, Martes o Domingo...' );
}

// Sin usar If Else, o Switch, unicamente objetos

dia = 10

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoels',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

//Los 2 palitos es el OPERADOR OR, define para asignar o preguntar si tiene valor
console.log ( diaLetras [dia] || 'Dia No definido' );


