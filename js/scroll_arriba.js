//Este archivo sirve para hacer cuando pulsemos el boton de abajo a la derecha tiene que hacer el scroll arriba al header 

let visible = false;

function Scroll() {
	let posicion = window.scrollY;
  	if(posicion > 0) {
    	visible = true;
    	document.getElementById("boton_scroll").style.display = "block";	
  	} 
	else {
    	visible = false;
    	document.getElementById("boton_scroll").style.display = "none";
  	}
}

function ScrollToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = Scroll;
document.getElementById("boton_scroll").addEventListener('click',ScrollToTop);
