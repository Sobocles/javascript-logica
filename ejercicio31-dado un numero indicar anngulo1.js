

function angulo(abertura){
    let resultado = "Angulo Completo";

    if(abertura < 90){
        resultado = "Angulo agudo";
    } else if(abertura === 90){
        resultado = "Angulo Recto";
    } else if(abertura > 90 && abertura < 180 ){
        resultado = "Angulo Obtuso";
    } else if(abertura === 100 ){
        resultado = "Angulo Llano";
    }else if(abertura > 180 && abertura < 360){
        resultado = "Angulo concavo";
    }
    return resultado;
}