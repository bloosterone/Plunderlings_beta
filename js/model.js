
        const modelViewer = document.querySelector("model-viewer");
      
        window.switchSrc = (element, name) => {
      const base = "../assets/" + name;
      
      modelViewer.src = base + '.glb';
      modelViewer.poster = base + '.webp';

      
      

      // Agrega la clase "selected" a la imagen seleccionada
      
      
    };
    const slides = document.querySelectorAll(".slide");
      
    const tituloModel = document.querySelector(".titulo-model");
    const btnBuy = document.querySelector(".btn_buy");
    
   
    slides.forEach((character, index) => {
      character.addEventListener('click', (event) => {
        
        
        handleClick(event, index); // Paso el índice como argumento

      });
    });
    
    let link = "";
    function handleClick(event, index) {
      
      const url = 'https://raw.githubusercontent.com/bloosterone/Plunderlings_beta/main/bd.json';
	    fetch(url)
      .then(response => {
        if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON.');
        }
        return response.json();
      })
      .then(data => {
        const imagenes = data.imagenes;
        // Puedes acceder a las imágenes y sus títulos aquí
        const imagenSeleccionada = imagenes[index];
        
      
        
          tituloModel.classList.add('fade-out'); // Agrega la clase para la transición de salida
          btnBuy.classList.add('fade-out2');
          // Espera un breve momento antes de cambiar el texto
          setTimeout(() => {
            tituloModel.textContent =`${imagenSeleccionada.titulo}`;
            
            
            
            setTimeout(() => {
              tituloModel.classList.remove('fade-out');
              btnBuy.classList.remove('fade-out2'); 
               // Elimina la clase para la transición de entrada
            }, 200); 
          }, 500); 
          link = `${imagenSeleccionada.link}`;
          
            btnBuy.addEventListener('click', () => {

                let nuevoLink = window.open(`${link}`, '_blank');
              if (nuevoLink) {
                // La ventana emergente se abrió correctamente
              } else {
                // La ventana emergente fue bloqueada
                alert('¡La ventana emergente fue bloqueada! Asegúrate de permitir ventanas emergentes en tu navegador.');
              }
              
              });
          
         

        
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });

      
        // document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
        //   // Keep slider interactions from affecting the XR scene.
        //   ev.preventDefault();
        // });
      }