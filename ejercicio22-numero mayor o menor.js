

function mayorMenor(numero1, numero2){
    let resultado = "";

    if( numero1 === numero2 ){
        resultado = "Los numeros son iguales !!";
    }else if(numero1 > numero2){
        resultado = "El numero mayor es: "+numero1+"\n";
        resultado += "El numero menor es: "+numero2;

    } else if(numero1 < numero2){
        resultado = "El numero mayor es: "+numero2+"\n";
        resultado += "El numero menor es: "+numero1;
    } else{
        resultado = "Introduce numeros correctos";
    }
    return resultado;
}

console.log(mayorMenor(34,6));