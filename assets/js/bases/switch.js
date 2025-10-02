//el switch sirven para valores exactos como los strings,
//el Switch ejecuta en base a las condiciones de la variable

const dia = 5; // 0: Domingo
switch ( dia ) {
    case 0:
        console.log ('Domingo');
        break;// esta condicion evita la ejecucion del switch y es utilizados en ciclos 
    case 1:
        console.log ('Lunes');
        break;
    case 2:
        console.log ('Martes');        
        break;
//el default seria un valor no establecido
    default: 
        console.log('No es lunes ni martes o domingo');
}


