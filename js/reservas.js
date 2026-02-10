document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservasForm");
  const mensaje = document.getElementById("mensajeReserva");

  if (!form || !mensaje) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    mensaje.textContent = "Tu reserva fue enviada con éxito! Te contactaremos pronto.";
    mensaje.classList.add("mostrar");

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.classList.remove("mostrar");
    }, 4000);

    form.reset();
  });

});
function mostrarConfirmacion() {
  const toast = document.getElementById("reserva-toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
