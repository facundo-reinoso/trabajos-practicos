document.addEventListener("DOMContentLoaded", function () {

    function login() {
        if (validarCampos()) {
            limpiarCampos();
        }
    }

    document.getElementById("submit").addEventListener("click", login);

});

function validarCampos() {
    const validationError = document.getElementById("error-message");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username.trim() === "") || (password.trim() === "")) {
        validationError.textContent = "Por favor, completa todos los campos.";
        form.appendChild(validationError);

        return false;
    }

    validationError.textContent = "";
    form.appendChild(validationError);

    return true;
}

function limpiarCampos() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}