const mobileToggle = document.getElementById("mobile-nav-toggle");

const mobileMenu = document.createElement("div");
mobileMenu.className = "mobile-menu";

mobileMenu.innerHTML = `
  <a href="index.html">Inicio</a>
  <a href="nosotros.html">Nosotros</a>
  <a href="servicios.html">Servicios</a>
  <a href="reservas.html">Reservas</a>
  <a href="contacto.html">Contacto</a>
`;

document.body.appendChild(mobileMenu);

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
