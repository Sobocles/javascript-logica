

function aleatorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}

console.log(aleatorio(1, 100));