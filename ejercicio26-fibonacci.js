

function fibonacci(numero){
    let serie = [0,1];

    for(let i = 2; i <= numero; i++){
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}

console.log("Serie completa: ", fibonacci(15));


//partio de i=0
const fib = (n) => {
    let limits = [0, 1];
    for (let i = 0; i < n - 1; i++) {
      limits.push(limits[i] + limits[i + 1]);
    }
    return limits[limits.length - 1];
  }
   
  console.log(fib(10));
