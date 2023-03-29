
function elementosComunes(array1, array2){

    const filtrado = array1.filter(elemento => { //se incluiran los elementos que tenga el array del array 1 y lo retorna
        return array2.includes(elemento);
    });

    return filtrado;
}

console.log(elementosComunes([4,5,6,7],[7,8,9,7,5]));


//Otra solucion
function elementosComunes(array1, array2){
  
    let array3 = [];
    for(let elemento of array1){
        if(array2.includes(elemento))
        {
            array3.push(elemento);
        }
        return array3;
    }
    

}

console.log(elementosComunes([4,5,6,7],[7,8,9,7,5]));


//Solucion indexada
function elementosComunes(array1, array2){
    let array3 = [];
    for(let i = 0; i < array1.length; i++){
    if(array2.includes(array1[i]))
    {
    array3.push(array1[i]);
    }
    }
    return array3;
    }
    
    console.log(elementosComunes([4,5,6,7],[7,8,9,7,5]));