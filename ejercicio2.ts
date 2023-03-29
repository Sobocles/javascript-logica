
const esPalindromoTs = (texto: string): boolean => {
    const invertido = texto.split('').reverse().join('');
    return invertido === texto;
  }
  
  console.log(`¿Es un palindromo? ${esPalindromoTs("pene")}`);
  