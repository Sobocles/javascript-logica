
const tablaMultiplicar = (numero) => {
    let multiplicacion="";
    for(let i=0; i<=10; i++){
        multiplicacion = numero * i;
        console.log(`${i} x ${numero} = ${multiplicacion}`);
    }
}






tablaMultiplicar(5);