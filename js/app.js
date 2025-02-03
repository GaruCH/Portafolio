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

const tabContainer = document.getElementById("tab-container");
  const tabs = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Función para desactivar el estilo de tab activo
  function resetTabs() {
    tabs.forEach(t => {
      t.classList.remove("border-primary", "text-black");
      t.classList.add("text-gray-500"); // Estilo por defecto
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      // Desactivar los tabs previamente activos
      resetTabs();
      
      // Activar el tab seleccionado
      e.target.classList.add("border-primary", "text-black");
      
      // Ocultar todos los contenidos
      tabContents.forEach(content => content.classList.add("hidden"));
      
      // Mostrar el contenido correspondiente
      document.getElementById(`content-${e.target.dataset.tab}`).classList.remove("hidden");

      // Scroll automático hacia el tab seleccionado
      tabContainer.scrollTo({ left: e.target.offsetLeft - 50, behavior: "smooth" });
    });
  });

  // Habilitar scroll horizontal con el mouse (Shift + Scroll)
  tabContainer.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      tabContainer.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  });

  // Inicializar el primer tab como seleccionado por defecto
  window.onload = () => {
    tabs[0].classList.add("border-primary", "text-black");  // El primer tab será el activo
    tabContents[0].classList.remove("hidden");  // Mostrar el primer contenido
  };

/*
const tabModulos = document.getElementById('tab-modulos');
    const tabFuncionalidades = document.getElementById('tab-funcionalidades');
    const contentModulos = document.getElementById('content-modulos');
    const contentFuncionalidades = document.getElementById('content-funcionalidades');

    tabModulos.addEventListener('click', () => {
      tabFuncionalidades.classList.add('text-gray-500');
      tabFuncionalidades.classList.remove('border-primary');
      tabModulos.classList.add('text-black');
      tabModulos.classList.add('border-primary');
      contentModulos.classList.remove('hidden');
      contentFuncionalidades.classList.add('hidden');
    });

    tabFuncionalidades.addEventListener('click', () => {
      tabFuncionalidades.classList.remove('text-gray-500');
      tabFuncionalidades.classList.add('text-blue-600', 'border-primary');
      tabModulos.classList.add('text-gray-500', 'border-primary');
      tabModulos.classList.remove('border-primary', 'text-black');
      contentFuncionalidades.classList.remove('hidden');
      contentModulos.classList.add('hidden');
    });
    */