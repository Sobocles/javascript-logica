

/* function coincidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,""); //SE PONE TODO EN MAYUSCULAS, SE QUITAN LOS SIGNOS
    resultado = 0;

    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(" "); 
        console.log(palabras);
        let mapa = {}; //objeto vacio
        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda]
      
    } else{
        resultado = 0;
    }
    return resultado;
} */

//console.log("Numero de coincidencias: ",coincidencias("Hola, que tal, soy VICTOR robles, victor victor","victor"))

function nOWords(frase, palabra){
    let fraseMinuscula = frase.toLowerCase()
    let palabraMinuscula = palabra.toLowerCase()
    let separada = fraseMinuscula.split(' ')
    let contador = 0
    for(let i = 0; i < separada.length; i ++){
        
        if(separada[i] === palabraMinuscula ) contador ++
    }
    if (contador > 0) {
        console.log(contador)
    }else console.log('not found')
    }
    nOWords('Hola Hola Hola Hola me llamo Rodrigo', 'hola')



