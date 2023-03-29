

//Sin arreglo
function repiteme(texto, numero_repeticiones) {
    let resultado = "";
    for (let i = 0; i < numero_repeticiones; i++) {
      resultado += texto;

      if (i !== numero_repeticiones - 1) { //es para verificar si se puso la ultima repeticion y no añadir una coma al final
        resultado += ", ";
      }
    }
    return resultado;
  } 
  console.log(repiteme("victor", 8));

 /* 
//con arreglo
  function repiteme(texto, numero_repeticiones) {
    let resultado = [];
    for (let i = 0; i < numero_repeticiones; i++) {
      resultado.push(texto);
    }
    return resultado.join(", ");
  }

console.log(repiteme("victor", 8));
*/

const repetir = (texto, numero) => {
  let resultado = '';
  let agregarComa = false;
  for(i=0; i<numero; i++){
    if(agregarComa){
      resultado += ', '
    }
    resultado += `${texto}`;
    agregarComa = true;
  }
  return resultado;

}



console.log(repetir('soy gay', 7));
