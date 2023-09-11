$(function () {
    $("#fecha_baja").datepicker();
});

$(function () {
    $("#fecha_alta").datepicker();
});


document.addEventListener("DOMContentLoaded", function () {

    function agregarEstudiantes() {

        if (validarCampos()) {
            var nombreEstudiante = document.getElementById("nombre").value;
            nombreEstudiante = nombreEstudiante + " " + document.getElementById("apellido").value;

            const nuevoEstudiante = document.createElement("li");
            nuevoEstudiante.textContent = nombreEstudiante;
            listaEstudiantes.appendChild(nuevoEstudiante);

            limpiarCampos();
        }

    }

    document.getElementById("submit").addEventListener("click", agregarEstudiantes);

});

function validarCampos() {
    const validationError = document.getElementById("error-message");

    var matricula = document.getElementById("matricula").value;
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var fechaAlta = document.getElementById("fecha_alta").value;

    if ((matricula.trim() === "") || (dni.trim() === "") || (nombre.trim() === "") || (apellido.trim() === "") || (email.trim() === "") || (fechaAlta.trim() === "")) {
        validationError.textContent = "Por favor, completa todos los campos.";
        form.appendChild(validationError);

        return false;
    }

    validationError.textContent = "";
    form.appendChild(validationError);

    return true;
}

function limpiarCampos() {
    document.getElementById("matricula").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fecha_alta").value = "";
}