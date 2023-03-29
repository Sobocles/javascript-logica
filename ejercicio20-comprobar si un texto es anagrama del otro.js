

function limpiarTexto(texto){
    return texto
        .replace(/[^\w]/gi,'') //LA FUNCION REPLACE REEMPLAZA CUALQUIER CARACTER QUE NO SEA UNA LETRA POR LA NADA, ES DECIR QUE LA ELIMINE SI NO ES UNA LETRA
        .toLowerCase() //CONVIERTE EL TEXTO EN MINUSCULA
        .split('') //CADA UNA DE LAS LETRAS LAS SEPARA EN UN ARRAY DE CARACTERES
        .sort() //ORDENA LOS CARACTERES ALFABETICAMENTE
        .join(''); //ESE ARRAY LOS VUELVE A UNIR PARA FORMAR LA DENUEVO PALABRA
}

function anagramas(texto1, texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("SerGio !! -., ","RiesGo!!!,,,,'"));