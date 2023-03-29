
const misPeliculas = (coleccion_de_peliculas) => {

    for(pelicula of coleccion_de_peliculas)
    {
        let paraMostrar = `${pelicula.titulo}, ${pelicula.director}`
        if(pelicula.vista){
                console.log("Ya has visto",paraMostrar);
        } else {
                console.log("No has visto",paraMostrar);
            }
        }
}



const coleccion_de_peliculas = [
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "Pichula",
        director: "gay",
        vista: false
    },
    {
        titulo: "nardia",
        director: "mariconsito",
        vista: true
    },
    {
        titulo: "terminator",
        director: "James Cameron",
        vista: false
    }
]

misPeliculas(coleccion_de_peliculas);