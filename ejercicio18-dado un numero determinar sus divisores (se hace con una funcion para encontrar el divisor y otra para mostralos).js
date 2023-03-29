
//selecionar un numero y que de como resultado todos sus divisores (ejemplo numero 20, sus divisores son 1,2,4,5,10)
/*
function divisor(numero, posible_divisor){
    if(numero%posible_divisor === 0){
        return posible_divisor;
    }

    return 0;
}

function mostrarDivisores(numero){
    for(let i = 1; i <= numero; i++){
        let esDivisor = divisor(numero,i);

        if(esDivisor) console.log(esDivisor);
    }
}

mostrarDivisores(20);
*/


function divisor(numero, posibleDivisor){
    if(numero%posibleDivisor===0){
        return posibleDivisor;
    } else
    return `${posibleDivisor} no es divisor de ${numero}`
}

const mostrardivisores = (numero) => {
    for(i=0; i<numero; i++){
        console.log(divisor(numero,i))
    }
}

mostrardivisores(12);


