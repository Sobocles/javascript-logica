
function capi(numero){
    let procesado = parseInt(numero
                        .toString()
                        .split('')
                        .reverse()
                        .join('')
    );
    return numero === procesado;
}

console.log(capi(2002));

//Sin funciones de javascript
function esCapicua(numero) {
    let numeroInvertido = 0;
    let numeroOriginal = numero;
    
    // Invertir el número
    while (numeroOriginal > 0) {
      const digito = numeroOriginal % 10;
      numeroInvertido = (numeroInvertido * 10) + digito;
      numeroOriginal = Math.floor(numeroOriginal / 10);
    }
    
    // Comparar el número original con su inverso
    return numero === numeroInvertido;
  }

  console.log(esCapicua(2002));