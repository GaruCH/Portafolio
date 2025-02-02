// Menú responsive
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');


// Al hacer clic en el botón del menú, alternamos la clase 'show'
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  menuBtn.classList.toggle('border-white'); // Mostramos el menú dentro de la pantalla
  sidebar.classList.toggle('-translate-x-full');  // Movemos el menú dentro de la pantalla
});

// Cerrar el menú si se hace clic en el fondo oscuro
sidebar.addEventListener('click', (e) => {
  if (e.target === sidebar) {
    sidebar.classList.add('hidden');
    sidebar.classList.add('-translate-x-full');  // Volver a esconder el menú
  }
});

feather.replace();


// Obtener elementos del DOM
const openModal = document.getElementById('GIPP_btn');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');
const body = document.body;

// Función para abrir el modal
openModal.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  body.classList.add('overflow-hidden'); // Bloquea el scroll del fondo
});

// Función para cerrar el modal
closeModal.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
  body.classList.remove('overflow-hidden'); // Restaura el scroll del fondo
});




const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;

let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón "Anterior"
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Botón "Siguiente"
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});
