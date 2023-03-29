
//la primero se imprime y de ahi se llama a la funcion buzz
function buzz(numero){
    let resultado = "";

    if(numero % 3 === 0 && numero % 5=== 0){
        resultado = "BuzzLightyear";

    } else if (numero % 3 === 0){
        resultado = "buzz";

    } else if(numero % 5 === 0){
        resultado = "lightyear";
    }else{
        return numero;
    }
    return resultado;
}

function imprimir(numero){
    for(let i = 1; i <= numero; i++){
        console.log(buzz(i));
    }
}

imprimir(100);


//version 2
/* function buzz(numero){
    for(let i=0; i<numero; i++){

        if(i%3 === 0){
            console.log('buzz');
        } else {
            if(i%5 === 0){
                console.log('lightyear');
            } else{
                if(i%3 === 0 && i%5 === 0){
                    console.log('lightyear');
                } else {
                    console.log(i);
                }
            }
        }
    }
}



buzz(100); */