
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
//los 3 puntos se llama SPREAD y la diferencia con el parametro REST, Cuando se lo pone dentro de un argumento une a todos los dems argymentos en 1 sola variable, cuando se lo usa por fuera y separa a los elenmentos esto rompe referencias y puede trabajar objetos y hacer igualzaciones que apunten a diferente sespacios de memoria
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre ( peter );

console.log({ peter, tony });

// Arreglos

const frutas = ['Manzana', 'Pera', 'Pinia'];
const otrasFrutas = [ ...frutas ];

otrasFrutas.push('Mango');
console.table ({ frutas, otrasFrutas });




