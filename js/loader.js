// Espera a que la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function () {
    // Oculta el loader cuando la página está completamente cargada
    hideLoader();
  
    // Puedes agregar más lógica aquí según sea necesario
  
    // Ejemplo: Después de cargar recursos, muestra el contenido principal
    showMainContent();
  });
  
  // Función para mostrar el loader
  function showLoader() {
    document.querySelector('html').classList.add('no-scroll');
  document.querySelector('.loader-container').style.display = 'flex';
  }
  
  // Función para ocultar el loader
  function hideLoader() {
    document.querySelector('.loader-container').style.display = 'none';
  document.querySelector('html').classList.remove('no-scroll');
  }
  
  // Función para mostrar el contenido principal después de cargar recursos
  function showMainContent() {
    // Muestra el contenido principal
    document.querySelector('body').style.visibility = 'visible';
  }
  
  // Llama a showLoader() cuando necesites mostrar el loader
  showLoader();
  