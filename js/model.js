
        const modelViewer = document.querySelector("model-viewer");
      
        window.switchSrc = (element, name) => {
      const base = "../assets/" + name;
      console.log(base);
      modelViewer.src = base + '.glb';
      modelViewer.poster = base + '.webp';

      
      

      // Agrega la clase "selected" a la imagen seleccionada
      
      element.nextElementSibling.classList.add("selected");
    };
    const slides = document.querySelectorAll(".slide");
      
    const tituloModel = document.querySelector(".titulo-model");
    const btnBuy = document.querySelector(".btn_buy");
    
   
    slides.forEach((character, index) => {
      character.addEventListener('click', (event) => {
        
        console.log("Índice del elemento seleccionado:", index);
        handleClick(event, index); // Paso el índice como argumento

      });
    });
    

    function handleClick(event, index) {
      console.log(event.currentTarget);
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
        
      
        let link = "";
          tituloModel.classList.add('fade-out'); // Agrega la clase para la transición de salida
          btnBuy.classList.add('fade-out2');
          // Espera un breve momento antes de cambiar el texto
          setTimeout(() => {
            tituloModel.textContent =`${imagenSeleccionada.titulo}`;
            console.log(`${imagenSeleccionada.titulo}`);
            link = `${imagenSeleccionada.link}`;
            console.log(link);
            btnBuy.addEventListener('click', () => {
              
              window.open(`${link}`, '_blank')
              });
            setTimeout(() => {
              tituloModel.classList.remove('fade-out');
              btnBuy.classList.remove('fade-out2'); 
               // Elimina la clase para la transición de entrada
            }, 200); // Puedes ajustar este tiempo según tus preferencias
          }, 500); // Puedes ajustar este tiempo según tus preferencias

          
         

        
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });

      
        // document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
        //   // Keep slider interactions from affecting the XR scene.
        //   ev.preventDefault();
        // });
      }