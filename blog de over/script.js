
function mostrarArticulo(button) {
  const articulo = button.previousElementSibling;
  articulo.textContent += " La IHC busca mejorar la relación entre los usuarios y la tecnología, facilitando el uso de sistemas complejos...";
  button.style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const successMessage = document.getElementById("success-message");
  successMessage.textContent = "Gracias por tu mensaje. Te responderemos pronto.";
});


const secciones = document.querySelectorAll('.seccion');

function animarSeccion() {
  secciones.forEach(seccion => {
      const rect = seccion.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
          seccion.classList.add('animado');
      }
  });
}

window.addEventListener('scroll', animarSeccion);
window.addEventListener('load', animarSeccion);
