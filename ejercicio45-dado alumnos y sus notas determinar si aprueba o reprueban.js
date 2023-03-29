

function suspensos(alumnos){

    let aprobados = 0;
    let suspensos = 0;

    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i][1] >= 5){
            aprobados++;
        }else{
            suspensos++;
        }
    }

    return {
        "aprobados": aprobados,
        "suspensos": suspensos,
    };
}

console.log(suspensos([    ["victor", 10],
    ["juan", 5],
    ["pepe", 4],
    ["Maria",8],
    ["Marta",3]
]));


//version arreglo de objetos
function suspensos(alumnos){

    let aprobados = 0;
    let suspensos = 0;

    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].nota >= 5){
            aprobados++;
        }else{
            suspensos++;
        }
    }

    return {
        "aprobados": aprobados,
        "suspensos": suspensos,
    };
}

console.log(suspensos([
    {"nombre": "victor", "nota": 10},
    {"nombre": "juan", "nota": 5},
    {"nombre": "pepe", "nota": 4},
    {"nombre": "Maria", "nota": 8},
    {"nombre": "Marta", "nota": 3}
]));