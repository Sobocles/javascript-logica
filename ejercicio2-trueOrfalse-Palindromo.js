

const esPalindromo = (texto) => {
    const invertido = texto.split('').reverse().join('');

    return invertido === texto;
  
}


console.log(`¿Es un palindromo? ${esPalindromo("pene")}`);
