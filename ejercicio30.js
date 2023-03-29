

function eliminarDuplicados(elementos){
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    });

    let sin_duplicados = new Set(elementos);

    return Array.from(sin_duplicados);
}

eliminarDuplicados(["uno", "dos",1,2,3,3,1,4,"hola"])