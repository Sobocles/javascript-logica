function masUsado(texto){

    let mapeo_letras = {};
    let maximo_repeticiones = 0;
    let letra_mas_repetida = "";

    for(let letra of texto){

        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        }else{
            mapeo_letras[letra]++;
        }
    }
    for(let letra in mapeo_letras){

        if(mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > maximo_repeticiones){
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }
    return letra_mas_repetida;
}

console.log("La letra mas repetida es:", masUsado("He subido un nuevo video a mi canal de youtube victor robles"))

masUsado("victorroblesweb.es");

