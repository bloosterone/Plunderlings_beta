


const typed = new Typed('#typed', {
    stringsElement: '#test',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 30, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 5, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  });

 

const miDiv = document.querySelector('.second_window');
const body = document.querySelector('#body');

const miSection1 = document.querySelector('.first_section');
const miSection2 = document.querySelector('.second_section');
const miSection3 = document.querySelector('.third_section');
const miSection4 = document.querySelector('.four_section');
const miSection5 = document.querySelector('.five_section');
const video = document.querySelector('.video');
const miSection45 = document.querySelector('.mid-45_section');

const details = document.querySelectorAll('.details');
const icon1  = document.querySelector('#d1');
const icon2  = document.querySelector('#d2');


details.forEach((e, index) => {
  e.addEventListener('toggle', () => {
    if (index === 0 && e.open) {
      
      details[1].removeAttribute('open');
      console.log("esta abierto")
     
     icon1.classList.remove("fa-plus");
      icon1.classList.add("fa-minus");

    }else if (index === 0 && !e.close){
      icon1.classList.remove("fa-minus");
      icon1.classList.add("fa-plus");
    }
    

    if (index === 1 && e.open) {
     
      details[0].removeAttribute('open');
      icon2.classList.remove("fa-plus");
      icon2.classList.add("fa-minus");
    } else if (index === 1 && !e.close) {
      
      icon2.classList.remove("fa-minus");
      icon2.classList.add("fa-plus");
    }
  });
});


let swiper="";
  swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      perSlideOffset: 8,
      perSlideRotate: 2,
      loop: true,
      autoplayDisableOnInteraction: false,
      on: {
        click: () =>{
        // Obtiene el índice del slide actual al hacer clic
        

        // Abre una nueva pestaña con la URL deseada (reemplaza 'URL_DESEADA' con tu URL real)
          window.open('../html/news.html', '_blank');
         }
      }
      
    });



// Escuchar eventos de desplazamiento (scroll)
window.addEventListener('scroll', function() {


//   const offsetBottom = miElemento.offsetTop + miElemento.offsetHeight;
    function detectarColision(elemento){
        let alturaElemento = elemento.offsetHeight;
        // console.log("el elemento ofsetheight: "+ alturaElemento);
        // Obtener la posición de desplazamiento actual
        const scrollPos = (window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop) + 200;
        // console.log("el elemento top del navegador: "+ (scrollPos));
        // Obtener la posición vertical del elemento
        const elementoPos = elemento.offsetTop;
        // console.log("posicion vertical del elemento: "+ elementoPos);
        const colisiona = (scrollPos >= elementoPos && scrollPos <= elementoPos + alturaElemento);

        return colisiona;
    }
  // Verificar si hay colisión comparando las posiciones
  if (detectarColision(miSection1)) {
    // Colisión detectada
    
    body.style.backgroundColor = '#222222';
  } else {
    // No hay colisión
   
  }
  
  if (detectarColision(miSection2)) {
    // Colisión detectada
   
    body.style.backgroundColor = '#bfacb5';
  } else {
    // No hay colisión
    
  }
  if (detectarColision(miSection3)) {
    // Colisión detectada
   
    body.style.backgroundColor = '#bfacb5';
  } else {
    // No hay colisión
    
  }
  if (detectarColision(miSection4)) {
    // Colisión detectada
    
    body.style.backgroundColor = '#8b687c';
    
  } else {
    // No hay colisión
    
  }
  if (detectarColision(miSection45)) {
    // Colisión detectada
    console.log("estoy en las card")
    swiper.params.autoplay.delay = 1000;
    swiper.autoplay.start();
   
    
  } else {
    // No hay colisión
    swiper.autoplay.stop();
    
  }
});





