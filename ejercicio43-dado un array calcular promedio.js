

const laMedia = (numeros) => {
    let promedio = 0;
    for(i=0; i<numeros.length; i++){
        promedio = promedio + numeros[i]/numeros.length;
    }

    return promedio;
}


console.log(laMedia([1,2,3,4,5,6]));