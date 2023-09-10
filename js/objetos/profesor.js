function Profesor(apellido, nombre, genero, asignatura, comision) {

    Persona.call(this, apellido, nombre, genero);
    this.asignatura = asignatura;
    this.comision = comision;

}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function () {

    console.log(this.nombre + " " + this.apellido + " se ha asignado a la comision: " + this.comision);

};

var profesor = new Profesor("Reinoso", "Facundo", "Masculino", "Programacion III", "Grupo 3");
profesor.obtDetalles();
profesor.asignar();
