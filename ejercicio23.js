

function enMayuscula(texto){
    let resultado = "";

    for(letra in texto){
        console.log(typeof letra)
        if(texto[letra - 1] === " " || parseInt(letra)===0){
            resultado = texto[letra].toUpperCase();
        } else{
            resultado += texto[letra];
        }
    }
    return resultado;
}

//Segunda solucion
function enMayuscula(texto){
    let palabras = [];

    for(let palabra of texto.split(" ")){ //['hola', 'visita', 'victorchupalo.es']
        palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
    }

    return palabras.join(' ');
}
console.log(enMayuscula("hola visita victorchupalo.es"));