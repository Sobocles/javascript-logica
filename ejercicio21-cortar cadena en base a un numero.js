

function recortar(texto, hasta){
    let resultado = "";

    if(typeof texto === 'string' && typeof hasta === 'number'){
        resultado = texto.substring(0, hasta);
    }else {
        resultado = "Introduce bien los datos !!";
    }

    return resultado;
}

console.log(recortar("Cursos Desarrolo web Victor Robles",6));