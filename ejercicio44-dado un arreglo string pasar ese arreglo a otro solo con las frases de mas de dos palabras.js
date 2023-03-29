
const palabrasSeparadas = (texto) => {
    let textito = [];

    for(i=0; i<texto.length; i++){
        if(texto[i].split(' ').length >= 2){
            console.log(texto[i].split(' ').length);
            textito.push(texto[i]);
        }
    }
    return textito;
}

console.log(palabrasSeparadas(["hola mijito", "maraco", "viernes de situelas", "gay"]));