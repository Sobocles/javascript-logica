

function triangulo(numero){
    let mitad = Math.floor(numero - 1);

    //bucle total filas
    for(let fila = 0; fila < numero; fila++){
        let nivel = "";

        //bucle para pintar asteriscos y espacios
        for(let columna = 0; columna < (2 * numero - 1); columna++){
            //console.log(mitad - fila, mitad + fila)
            if(mitad - fila <= columna && mitad + fila >= columna){
                nivel += "*";
            }else{
                nivel += " ";
            }
        }
        resultado += nivel + "\n";
    }
    return resultado;
}

triangulo(4);