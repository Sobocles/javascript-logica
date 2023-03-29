

 function numeroPalabra(frase, palabra){
        const fraseMinuscula = frase.toLowerCase();
        const PalabraMinuscula = palabra.toLowerCase();
        let separada = fraseMinuscula.split(' ');
        let contador = 0;
        for(let i=0; i < separada.length; i++){
            if(separada[i] === PalabraMinuscula ){
                contador++;
            }
        }
        if(contador === 0){
            console.log("no se encontro la palabra");
        }

        return contador;
    }

    console.log(numeroPalabra("Hola Hola Hola Hola me llamo Rodrigo","hola"));