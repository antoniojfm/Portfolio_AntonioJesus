"use strict";
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
                        
function validarFormulario(evento) {
    evento.preventDefault();
    var nombre_usuario = document.getElementById('Nombre').value;
    var correo_usuario = document.getElementById('Correo_Electronico').value;
    var comentarios_usuario = document.getElementById('Comentarios').value;

    if(nombre_usuario.length <= 50 && (/^\w+([\.\-\_]?\w+)*@\w+([\.-]?\w+)*(\.\D{2,4})+$/.test(correo_usuario)) && comentarios_usuario.length <= 80) {
        alert("El Formulario se ha validado correctamente");
        this.submit();
    }
}
