$(function () {
    $("#fecha_baja").datepicker(); // Inicializar el selector de fecha
});

$(function () {
    $("#fecha_alta").datepicker(); // Inicializar el selector de fecha
});

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form");
    const listaEstudiantes = document.getElementById("listaEstudiantes");

    function agregarEstudiante() {
        var nombreEstudiante = document.getElementById("nombre").value;
        nombreEstudiante = nombreEstudiante + " " + document.getElementById("apellido").value;

        if (nombreEstudiante.trim() !== "") {
            const nuevoEstudiante = document.createElement("li");
            nuevoEstudiante.textContent = nombreEstudiante;
            listaEstudiantes.appendChild(nuevoEstudiante);
            document.getElementById("matricula").value = "";
            document.getElementById("dni").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("email").value = "";
            document.getElementById("fecha_baja").value = "";
            document.getElementById("fecha_alta").value = "";
        }
    }

    document.getElementById("submit").addEventListener("click", agregarEstudiante);

});