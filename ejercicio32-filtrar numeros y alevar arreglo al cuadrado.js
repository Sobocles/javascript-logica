
function alCuadrado(numeros){
    let numeros_cuadrados = numeros
                                .filter(numero => typeof numero === "number")
                                .map(numero => Math.pow(numero, 2)) //LA FUNCION MAP SIRVE PARA TRASFORMAR LOS ELEMENTOS DE UN ARREGLO EN EST CASO LOS ELEVA AL CUADRADO

   return numeros_cuadrados; 
}

console.log(alCuadrado([12, 56, 77, "hola", true, ["hola"], 80]));

function alCuadrado(numeros)
{
    for(let i in numeros)
    if(typeof(numeros[i] != 'number')){
        numeros.splice(i,1); //elimina 1 elemento (por eso es 1), del indice i (osea todos los que no cumplan la condicion de ser numeros)
    }

    for(let f of numeros){
        console.log(Math.pow(f,2));
    }
}

alCuadrafo([3,9,12]);