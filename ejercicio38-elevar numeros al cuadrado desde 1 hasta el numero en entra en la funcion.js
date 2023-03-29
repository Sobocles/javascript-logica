



const elevarCuadrado = (numero) => {
    return numero**2;
}

const mostrar = (numero) => {
    for(i=1; i<numero; i++){
        let elevado = elevarCuadrado(i); 
        console.log(`El numero ${i} elevado al cuadrado es ${elevado} \n`);
    }
    
}

mostrar(12)