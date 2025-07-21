document.addEventListener("DOMContentLoaded", function(){
    let mensaje = prompt("Ingrese mensaje:")
    let parrafoMensaje = document.querySelector("#mensaje");
    parrafoMensaje.textContent = mensaje;
})