
function aficiones(arrObj){
    let mapeo = {};

    for(objeto of arrObj){
        
        for(aficion of objeto.aficiones){
            if(!mapeo[aficion]){
                mapeo[aficion] = 1;
            }else{
                mapeo[aficion]++;
            }
        }
    }
    return mapeo;
}

const usuarios = [
    { nombre: "Victor", aficiones: ["informatica", "cine", "videojuegos"]},
    { nombre: "Juan", aficiones: ["cine", "futboll", "tenis"]},
    { nombre: "Paco", aficiones: ["informatica", "cine", "Surf"]},
    { nombre: "Pepe", aficiones: ["informatica", "cine", "videojuegos"]}
];

console.log(aficiones(usuarios));