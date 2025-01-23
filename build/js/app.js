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
