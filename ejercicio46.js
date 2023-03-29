

function todosSubStrings(palabra){

    let substrings = [];

    for(letra in palabra){
        let comienzo = parseInt(letra);

        for(let i = 0; i <= palabra.length; i++){
            let final = parseInt(i) + parseInt(comienzo);

            substrings.push(palabra.substring(comienzo,final))
        }
    }
    return substrings.filter(elemento => elemento.length >= 1);
}

console.log(todosSubStrings("hola"));