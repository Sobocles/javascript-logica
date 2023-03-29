function escalera(numero){
    
    let escalera_completa = "";

    for(let nivel = 1; nivel <= numero; nivel++){      
         
        let escalones = "";

        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]";
        }

        escalera_completa += escalones + '\n';
    }

    return escalera_completa;
}

console.log(escalera(5));