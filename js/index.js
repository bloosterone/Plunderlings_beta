const typed = new Typed('#typed', {
    stringsElement: '#test',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 2, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 5, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  });

  const miDiv = document.querySelector('.second_window');
  const body = document.querySelector('#body');

  function handleScroll() {
	let windowHeight = window.innerHeight;
	let rect = miDiv.getBoundingClientRect();
	let topPosition = rect.top;


	
	// Ajusta la posición según el margen que has agregado
	
	if (topPosition<= 350 &&  topPosition>= -896) {

		body.style = 'background-color: #cb6df0;'


	}
	else if(topPosition<= -941 ){
		body.style = 'background-color: #fff;'
	}
	else{
		body.style = 'background-color: #000;'
	}
  }

  // Agrega un event listener para el evento scroll
  window.addEventListener('scroll', handleScroll);

