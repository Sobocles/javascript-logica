

function calcularDias(dias){
    let anios = Math.floor(dias/365);
    let dias_restantes = (dias_restantes/30);
    let meses = Math.floor(dias_restantes/30);
    dias_restantes = dias_restantes%30;

    return `Equivale a ${anios} años, ${meses} meses y ${dias_restantes}`;
}

console.log(calcularDias(920));