

/* function hastacero(numero){

    let resultado = `--- del ${numero} al 0 --- \n`;

    while(numero > 0){
        resultado += `- numero ${numero} \n`;
        numero -= 8;
    }

    resultado += "--- FIN ---";

    return resultado;
}

console.log(hastacero(100)) */


//Con ciclo for

function hastacero(numero){

    let resultado = `--- del ${numero} al 0 --- \n`;

    for(i=numero; i>0; i-=8){
        resultado += `- ${i}`;
    }
    resultado += "--- FIN ---";

    return resultado;
}




console.log(hastacero(100)) 









