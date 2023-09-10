function Persona(apellido, nombre, genero) {

    this.apellido = apellido;
    this.nombre = nombre;
    this.genero = genero;

}

Persona.prototype.obtDetalles = function () {

    console.log("Nombre: " + this.nombre, "Apellido: " + this.apellido, "Genero: " + this.genero);

}