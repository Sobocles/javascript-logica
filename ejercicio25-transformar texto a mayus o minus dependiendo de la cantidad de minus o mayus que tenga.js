
/*
function mayusMinus(texto){
    let mayusculas = 0;
    let minusculas = 0;
    let resultado = "";

    for(let letra of texto){
        if(/[A-Z]/.test(letra)){
            mayusculas++;
        } else{
            minusculas++;
        }
    }

    if(mayusculas > minusculas){
        resultado = texto.toUpperCase();
    }else{
        resultado = texto.toLowerCase();
    }
    return resultado;
} */


//otra forma
const mayusMinus = (texto) => {
    

    coincidenciasMayuculas = texto.match(/[A-Z]/g);
    coincidenciasMinuscula = texto.match(/[a-z]/g);

    if(coincidenciasMayuculas.length > coincidenciasMinuscula.length){
        return texto.toUpperCase()
    } 
    else 
         return texto.toLowerCase()
    

}

    

console.log(mayusMinus("VICTORroblesweb.es"));


