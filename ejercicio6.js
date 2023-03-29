

function lado(numero){
    let lado = "";

    for(let i = 0; i < numero; i++){
        lado += "*";
    }
    return lado;
}

function cuadrado(numero){

    let dibujo = lado(numero) + "\n";

    dibujo += lado(numero);

    return dibujo;

}