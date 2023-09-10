function Estudiante(apellido, nombre, genero, curso, grupo) {

    Persona.call(this, apellido, nombre, genero)
    this.curso = curso;
    this.grupo = grupo;

}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function () {

    console.log(this.nombre + " " + this.apellido + " se ha registrado en el grupo " + this.grupo);

};


var estudiante = new Estudiante("Pereyra", "Esteban", "Masculino", "Programacion I", "Grupo 2");
estudiante.obtDetalles();
estudiante.registrar();