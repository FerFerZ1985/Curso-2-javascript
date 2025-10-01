const regresaTrue = () => {
    console.log ( 'Regresa True' );
    return true;
}

const regresaFalse = () => {
    console.log ( 'Regresa False' );
    return false;
}
 //La logica booleana es para trabajor con valores booleanos

console.warn ( 'Not a la negacion' );
console.log ( true ); // da como resultado TRUE
console.log ( !true ); // ACA LO PASA FALSE POR EL SIGNO DE EXCLAMACION
console.log ( !false ); // Y Aca devuelve a true

console.log ( !regresaFalse() );

console.warn ( 'And' ); // resulta true si todos los valores son verdaderos 
console.log ( true && true ); //aca todas las condiciones si estan en true, el resutlado es true
// Aqui el resultado es FALSE, porq no todas la condiciones son true, pero dado el caso que se pone el signo de exclamacion, cambia a true
console.log ( true && false ); 

//otra de las condiciones que tiene el AND (&&) ES DISPARAR CONDICIONES SI SE CUMPLE LA PRIMERA por ejemplo

console.log ('=========');
console.log ( regresaFalse() && regresaTrue() ); //logicamente dara falso 
console.log ( regresaTrue() && regresaFalse() );

console.log ( '==== && =====');
regresaFalse() && regresaTrue();

console.log ( '4 condiciones', true && true && true && false);

console.warn( 'OR' ); //Esto es basicamente lo opuesto del &&, 
console.log ( true || false ); //por mas que las concidiono sea un true y el otro false, la condicino OR siempre dara TRUE
console.log ( false || false ); // la unica condicion que daria false, es q si ambos son FALSE


console.log ( regresaTrue() || regresaFalse() ); // le estamos diciendo que ejecuta el regresa true por la condicion OR
console.log ( '4 condiciones', true || true || true || false); 


console.warn ( 'Asignaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5});




