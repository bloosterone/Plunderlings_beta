const typed = new Typed('#typed', {
    stringsElement: '#test',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
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

  
//   document.addEventListener('aos:in:super-duper', ({ detail }) => {
// 	console.log('animated in1', detail);
// 	body.style = 'background-color:#A4907C';
//   });
//   document.addEventListener('aos:in:super-duper2', ({ detail }) => {
// 	console.log('animated in2', detail);
// 	body.style = 'background-color:#fff';
//   });
  
  function handleScroll() {
    let topPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Ajusta la posición según el margen que has agregado
    console.log(topPosition);

    if (topPosition >= 0 && topPosition <= 900) {
        body.style.backgroundColor = '#222222';
    } else if (topPosition >= 901 && topPosition <= 4700) {
        body.style.backgroundColor = '#A4907C';
    } else {
        body.style.backgroundColor = '#f9f0ff';
    }
}

// Agrega event listeners para los eventos scroll y touchmove
window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);
  

    
// function handleScroll() {
//     let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//     let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

//     // Ajusta la posición según el margen que has agregado
//     console.log(scrollPosition);

//     // Calcula las condiciones en función de la altura del viewport
//     let scrollThreshold1 = viewportHeight * 0.1;  // Porcentaje inferior del viewport
//     let scrollThreshold2 = viewportHeight * 0.8;  // Porcentaje superior del viewport

//     if (scrollPosition >= 0 && scrollPosition <= scrollThreshold1) {
//         body.style.backgroundColor = '#222222';
//     } else if (scrollPosition > scrollThreshold1 && scrollPosition <= scrollThreshold2) {
//         body.style.backgroundColor = '#A4907C';
//     } else {
//         body.style.backgroundColor = '#f9f0ff';
//     }
// }

// // Agrega event listeners para los eventos scroll y touchmove
// window.addEventListener('scroll', handleScroll);
// window.addEventListener('touchmove', handleScroll);

 
