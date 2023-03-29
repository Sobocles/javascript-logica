
//version corta
function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi); //La función match() se utiliza en JavaScript para buscar una coincidencia entre una cadena y una expresión regular
    console.log(coincidencias);
    return coincidencias ? coincidencias.length : 0;
} 


//version larga


console.log("Numero de vocales:",vocales("avctro uo"))