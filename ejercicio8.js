

function invertirNumero(numero){

    let invertido = parseint(
        numero
         .toString() //lo convierte a string
         .split('') //separa cada numero en un array
         .reverse() //le da la vuelta a ese array
         .join('')  //
    ) * Math.sign(numero);
    return invertido;
}

console.log("El numero invertido es", invertirNumero(15));



//otra solucion
const reverso = (num) => {
  let invertido = num.toString();
  resultado= "";
  for(i=invertido.length-1; i>=0 ; i--){
    resultado += invertido[i]; 
  }
  return parseInt(resultado);

}

console.log(reverso(34));

