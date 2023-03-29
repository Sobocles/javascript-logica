

/* function censurado(texto=false, busqueda=false){
    let resultado = "";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    } else if(!texto && busqueda){
        resultado = "No puedes leer texto";

    } else if(!texto && !busqueda){
        resultado = "No puedes hacer la busqueda";
    } else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, 'gi'),"[-CENSURADO]");
    }
    return resultado;
} 

console.log(censurado("hola78 holamanohola hola caracola","hola"))

*/




    
//Otra solucion
function censurar(texto,busqueda){

    let resultado = "";

    
    if(typeof texto === "string" || typeof busqueda === "string"  ){

        palabrasSeparadas = texto.toLowerCase().split(' ');
        for(let i=0; i<palabrasSeparadas.length; i++){
            if(palabrasSeparadas[i] === busqueda){
                palabrasSeparadas[i] = "[CENSURADO]";
            }

            resultado = resultado + palabrasSeparadas[i] + " ";
        }
    }else{
        respuesta = "No puedes leer el texto y la busqueda";
    }

    return resultado;
    
}
console.log(censurar("Mi corazón arde por ti , incluso más despues del pasar de los años , mi corazon arde por tu venida","arde"))