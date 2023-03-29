/*
Dado un string devolver cuales son las letras que aparecen solo una vez y cual es la primera
ejemplo
soloUnaVez("frase-frase-Hoy");
devuelve: [["H","O","Y"],"H"]
*/
function soloUnaVez(texto){
    let contadores = {};
    let resultado = [];
    let letras = texto.split('').filter(letra => letra.trim().length >= 1); //la parte de filter filtra para que no hayan espacion en el arreglo resultando al ejecutar la funcion split
    
    for(let letra of letras){
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra]++;
        }
    }
    console.log(contadores);

    //Eliminar las letras que se repitan (que son 2 o mas)
    for(let letra in contadores){
        if(contadores[letra] === 1){
           resultado.push(letra);
        }
    }
    return [resultado, resultado[0]];
}

console.log(soloUnaVez("frase frase HOY"));