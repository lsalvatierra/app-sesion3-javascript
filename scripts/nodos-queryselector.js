document.addEventListener("DOMContentLoaded", function () {
  let mensaje = prompt("Ingrese mensaje:");
  let parrafoMensaje = document.querySelector("#mensaje");
  parrafoMensaje.textContent = mensaje;

  let bloques = document.querySelectorAll(".bloque");
  bloques.forEach(function (bloque, index) {
    if (index % 2 === 0) {
      // Solo los bloques en posición par
      bloque.style.border = "2px solid black";
    }
  });
});
