const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
//el for tiene 3 partes, donde va la variable, la condicion del while y el incrementador. 
// en la variable se puede iniciar con el valor q se necesite, pero al trabajar con arreglos la condcion debe ser 0
//en la condicion while se ejecutara  siemrpe y cuando sea verdadera
//y luego la condicion para incrementar osea i++
for ( let i = 0; i < heroes.length; i++ ) {
//para ejecutarlo llamamos en el log en [i], en esete caso lo estamos llamando 5 veces pero solo hay 4 condiciones, por eso reemplazmos con .lenght
    console.log ( heroes[i] );
}
//el FOR IN es mas utilizados comenzamos con el console.warn, viene con la palabra reservada for, se inicia la variable dentro de las () y viene el iterable o arrays, esto es basicamente lo de arriba va a menjar mi condcion y salir del ciclo cuadno no haya mas elementos
console.warn ( 'For in' )
for ( let i in heroes )
    console.log ( heroes[i] );
//el FOR OF ES es bastante usado para tener rerefernecias a valores de objetos o arrays y seria la misma sintaxis como el ejemplo, a diferencia del FOR IN en vez de poner heroes pnemos  [i] pero no se acostumbra poner la condicion I en este caso, siempre de manera singular del arreglo (array)
console.warn ( 'For of');
    for ( let heroe of heroes ){
        console.log ( heroe );
    }




