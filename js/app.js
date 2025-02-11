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
