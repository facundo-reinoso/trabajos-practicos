$(function () {
    $("#fecha_ingreso").datepicker();
});

document.addEventListener("DOMContentLoaded", function () {

    function registrarIntegranteCSTF() {
        if (validarCampos()) {
            limpiarCampos();
        }
    }

    document.getElementById("submit").addEventListener("click", registrarIntegranteCSTF);

});

function validarCampos() {
    const validationError = document.getElementById("error-message");

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cargo = document.getElementById("cargo").value;
    var departamento = document.getElementById("departamento").value;
    var fecha_ingreso = document.getElementById("fecha_ingreso").value;
    var contacto = document.getElementById("contacto").value;
    var proyecto_asignado = document.getElementById("proyecto_asignado").value;

    if ((nombre.trim() === "") || (apellido.trim() === "") || (cargo.trim() === "") || (departamento.trim() === "") || (fecha_ingreso.trim() === "") || (contacto.trim() === "") || (proyecto_asignado.trim() === "")) {
        validationError.textContent = "Por favor, completa todos los campos.";
        form.appendChild(validationError);

        return false;
    }

    validationError.textContent = "";
    form.appendChild(validationError);

    return true;
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("fecha_ingreso").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("proyecto_asignado").value = "";
}