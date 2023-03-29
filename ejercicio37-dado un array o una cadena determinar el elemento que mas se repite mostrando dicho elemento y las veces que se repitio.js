const elqueMasSeRepite = (datos) => {

    let valorMasFrecuente = 0; let masFrecuente = "";
    if(typeof datos === "string"){ 
        datos = datos.split(" ");
    }

    let mapa = {};
    for(let elemento of datos){
        if(mapa[elemento])
            mapa[elemento]++;
        else
            mapa[elemento]=1;
    }



    

    for(let elemento in mapa){
        if(mapa[elemento] > valorMasFrecuente){
            valorMasFrecuente = mapa[elemento];
            elementoMasFrecuente = elemento;
        }
    }

    return {
        "valorMasFrecuente": valorMasFrecuente,
        "Elemento mas Frecuente": elementoMasFrecuente
    };


}


console.log(elqueMasSeRepite([1,2,3,4,4,4]));
console.log(elqueMasSeRepite("me gusta victor y pepe victor me la chupa"));