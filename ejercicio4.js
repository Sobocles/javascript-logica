

const invertir = (cadena) => {
    let invertida = "";
    cadenaSeparada = cadena.split('');
    console.log(cadenaSeparada);
    for(let i=cadenaSeparada.length-1; i>=0; i--){
        invertida = invertida + cadenaSeparada[i]; //OJO QUE PARA IR CONCATENANDO CADA LETRA PARA CONSTRUIR LA PLABRA INVERTIDA ES NECESARIO  invertida = invertida +  no funciona solo poniendo invertida = cadenaSeparada[i] 
    }
    return invertida;
}

console.log(invertir("hola"));