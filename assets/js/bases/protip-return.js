
// function crearPersona( nombre, apellido ){
//     return { nombre, apellido}
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona ( 'Fernando', 'Zarate' );
console.log( persona );


function imprimeArgumentos(){
    console.log ( arguments );
}
// dento de los () utilizo los 3 puntos el cual llama a todos los argumentos del nombre de la const, si solo escribo ARGS me llama al primero argumento osea 10, pero si pongo los 3 puntos que tiene de nombre REST me ejecuta todo los argumentos, si llamamos a otra cosa despeus del rest da error, por eso lo debemos llamar antes del rest
const imprimeArgumentos2 = ( edad, ...args ) => {
   // console.log ( {edad, args} );
    return args;
}

//De esta forma para llamar a los argumentos es comodo utilizarlo de esta manera, pero solo llamo a todos menos a la edad porque esta extraido y por el return no lo ejecuta
const [ casado, viudo, nombre, saludo ] = imprimeArgumentos2 (10, true, false, 'Fer Libo', 'Hola');
console.log({ casado, viudo, nombre, saludo  });  

//si quieren cambiar la variable, lo hacemos de esta manera con 2 puntos 
const { apellido: nuevoAepellido } = crearPersona ( 'Fernando', 'Zarate' );
console.log ({ nuevoAepellido });

const Tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log ( 'nombre', personaje.nombre );
//     console.log ( 'codeName', personaje.codeName );
//     console.log ( 'vivo', personaje.vivo );
//     console.log ( 'edad', personaje.edad );
//     console.log ( 'trajes', personaje.trajes );
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log ({ nombre });
    console.log ({ codeName });
    console.log ({ vivo });
    console.log ({ edad });
    console.log ({ trajes });
}

imprimePropiedades( Tony );



