// cuando haya {} podemos asociarlo con un OBJETO LITERAL, estos objetos literales son OBJETOS CON PARES DE VALORES, tiene una propiedad q son las {} y el valor colocamos los 2 punts ":"
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log ( personaje );
console.log ( 'Nombre', personaje.nombre );
console.log ( 'Nombre', personaje['nombre'] );
console.log ( 'Edad', personaje.edad );
console.log ( 'Coors', personaje.coords );
console.log ( 'Lat', personaje.coords.lat );
console.log ( 'No. Trajes', personaje.trajes.length );
//no necesariamente debo poner personaje.trajes.length - 1 para llamar a uno de los 3 trajes en este caso, traquilamente puedo poner [2] y seria lo mismo
console.log ( 'Ultimo traje', personaje.trajes [personaje.trajes.length - 1] ); 

const x = 'vivo';
console.log ( 'Vivo', personaje[x]);

console.log ( 'Ultima Pelicula', personaje['ultima-pelicula']);

//Mas detalles

//Para borrar la propiedad de un objeto debemos adicionar la palabrea "delete"
delete personaje.edad;
console.log ( personaje );

//Para crear una nueva propiedad en el objeto o q se va a crear en el momento de ejecucion por ejemplo
personaje.casado = true;
//si necesitamos tenerlos en arrays osea en pares de valores 
const entriesPares = Object.entries ( personaje );
console.log ( entriesPares );
// el "Object.freeze" congela o mejor dicho no se puede cambiar pero solo a las propiedades directas
Object.freeze ( personaje );
// por mas que agregue nuevos objetos o propiedades, el Object.freeze me impide que se modifique (siempre poner Object con la O en mayuscula) en el unico caso que el freeze no puede cambiar es cuando los objetos estan dentro de los objetos como en la direccion
personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log ( personaje );

//para hacer un listado de todas las propiedades q tiene ese objeto, hacemos una const y buscamos el metodo "Object.getOwnPropertyNames (aqui va el objeto);" y si queremos los valores creamos una nueva propiedad y utilizamos el "Object.values (objeto);"
const propiedades = Object.getOwnPropertyNames ( personaje );
const valores     = Object.values ( personaje );
console.log ( propiedades, valores );



