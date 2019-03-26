//exportar
export const nombretarea = "pasear al perro";
// Escribir clases

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar(){ //metodos
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
    }
}

class ComprasPendientes extends Tarea { //hereda todos los atributos y metodos de la clase Tarea
    constructor(nombre, prioridad, cantidad)
    {
        super(nombre, prioridad)
        this.cantidad = cantidad
    }

    mostrar(){ //reescribir el método
        super.mostrar() //heredo el metodo mostrar y le agrego el resto
        console.log(`y la cantidad de ${this.cantidad}`);
    }
}

// crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3)
console.log(compra1.mostrar());