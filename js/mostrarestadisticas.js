$(function () {
    $("#fecha_min").datepicker();
});

$(function () {
    $("#fecha_max").datepicker();
});

document.addEventListener("DOMContentLoaded", function () {

    function getProjectByDate() {
        if (validarCampos()) {
            limpiarCampos();
        }
    }

    document.getElementById("get_project_by_date").addEventListener("click", getProjectByDate);

});

function validarCampos() {
    form = document.getElementById("form_project_date");

    const validationError = document.getElementById("error-message");

    var fechaDesde = document.getElementById("fecha_min").value;
    var fechaHasta = document.getElementById("fecha_max").value;

    var fecha1 = new Date(fechaDesde);
    var fecha2 = new Date(fechaHasta);

    if (fecha1 > fecha2) {
        validationError.textContent = "Por favor, ingrese un rango de fechas valido.";
        form.appendChild(validationError);

        return false;
    }

    validationError.textContent = "";
    form.appendChild(validationError);

    return true;
}

function limpiarCampos() {
    document.getElementById("fecha_min").value = "";
    document.getElementById("fecha_max").value = "";
}