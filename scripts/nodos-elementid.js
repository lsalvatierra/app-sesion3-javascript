document.addEventListener("DOMContentLoaded", function(){
    let mensaje = prompt("Ingrese un mensaje:")
    let parrafoMensaje = document.getElementById("mensaje");
    parrafoMensaje.textContent = mensaje
})