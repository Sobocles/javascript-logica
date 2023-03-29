




//sin usar funciones
function altoBajo(numeros) {
    let n = numeros.length;
    let ordenados = [...numeros];
    
    // Algoritmo de ordenamiento de burbuja
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (ordenados[j] > ordenados[j + 1]) {
          // Intercambiar los elementos
          let temp = ordenados[j];
          ordenados[j] = ordenados[j + 1];
          ordenados[j + 1] = temp;
        }
      }
    }
    
    return {
      bajo: ordenados[0],
      alto: ordenados[n - 1]
    }
  }
  
  console.log(altoBajo([88,100,1,2,3,34,20,12,600,900,200]));
  