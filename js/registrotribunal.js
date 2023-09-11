document.addEventListener("DOMContentLoaded", function () {

    function agregarProfesor() {
        if (validarCampos()) {

            agregarFila();

            limpiarCampos();
        }
    }

    document.getElementById("submit").addEventListener("click", agregarProfesor);

});

function validarCampos() {
    const validationError = document.getElementById("error-message");

    var cuil = document.getElementById("cuil").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var asignatura = document.getElementById("asignatura").value;
    var comision = document.getElementById("comision").value;

    if ((cuil.trim() === "") || (nombre.trim() === "") || (apellido.trim() === "") || (asignatura.trim() === "") || (comision.trim() === "")) {
        validationError.textContent = "Por favor, completa todos los campos.";
        form.appendChild(validationError);

        return false;
    }

    if (cuil.length !== 11) {
        validationError.textContent = "El CUIL debe ser de 11 digitos.";
        form.appendChild(validationError);

        return false;
    }

    validationError.textContent = "";
    form.appendChild(validationError);

    return true;
}

function limpiarCampos() {
    document.getElementById("cuil").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("asignatura").value = "";
    document.getElementById("comision").value = "";
}

function agregarFila() {
    var tablaBody = document.getElementById("tablaBody");

    var newRow = tablaBody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var asignatura = document.getElementById("asignatura").value;
    var comision = document.getElementById("comision").value;

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = asignatura;
    cell4.innerHTML = comision;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function () {
        tablaBody.deleteRow(newRow.rowIndex - 1);
    };
    
    cell5.appendChild(deleteButton);

}
