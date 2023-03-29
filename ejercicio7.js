const impares = (numero1, numero2) => {
    let resultado = `Los números impares que hay entre ${numero1} y ${numero2} son: `;
    let agregarComa = false;
    while(numero1 <= numero2){
        if(numero1%2 !== 0){
            if(agregarComa){
                resultado += ", ";
            }
            resultado += numero1;
            agregarComa = true;
        } 
            numero1++;           
    }
    console.log(resultado); 
};
  
  
  impares(7,9);
  

