
function cuentaLetras(texto){
    let consonantes = 0, vocales = 0, texto_limpio = "";

    texto_limpio = texto.split('')
                .filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
                .join("");


    console.log(texto_limpio);
    for(let letra of texto_limpio){
        if(/[áéíóúaeiou]/gi.test(letra)){
            vocales++;
        }else{
            consonantes++;
        }
    }
    return [consonantes, vocales];
}

let letras = cuentaLetras("hola!! . , - qué tal");

console.log("Consonantes:", letras[0]);
console.log("vocales:", letras[1]);