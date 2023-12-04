


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
const miSection4 = document.querySelector('.four_window');
const miSection5 = document.querySelector('.five_section');











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
   
    body.style.backgroundColor = '#A4907C';
  } else {
    // No hay colisión
    
  }
  if (detectarColision(miSection3)) {
    // Colisión detectada
   
    body.style.backgroundColor = '#A4907C';
  } else {
    // No hay colisión
    
  }
  if (detectarColision(miSection4)) {
    // Colisión detectada
    
    body.style.backgroundColor = '#f9f0ff';
    
  } else {
    // No hay colisión
    
  }
});





