

class Relog {

    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }

    actualizar(segundos){
        this.segundos += segundos;

        //Actualizar segundos
        if(this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        }
        //actualizar minutos
        if(this.minutos >= 60){
            this.horas++;
            this.minutos = 0;
        }
        //Actualizar horas
        if(this.horas >= 24){
            this.horas = 0;
        }
    }

    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`);
    }

    encender(){
        setInterval(() => {
            this.mostrar();
        }, 1000);
    }
}

let mi_relog = new Relog();
mi_relog.encender();


function relogRapido(){
    setInterval(() => {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        console.log(`${horas}:${minutos}:${segundos}`);
    }, 1000)
}

relogRapido();