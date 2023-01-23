//Este archivo sirve para hacer la animacion de las barras de progreso

function animacionBarras() {
    document.getElementById("barraHTML").classList.toggle ("porcentajeBarraHTML");
    document.getElementById("barraCSS").classList.toggle ("porcentajeBarraCSS");
    document.getElementById("barraBootstrap").classList.toggle ("porcentajeBarraBootstrap");
    document.getElementById("barraPHP").classList.toggle ("porcentajeBarraPHP");
    document.getElementById("barraKotlin").classList.toggle ("porcentajeBarraKotlin");
    document.getElementById("barraJS").classList.toggle ("porcentajeBarraJS");
    document.getElementById("barraSwift").classList.toggle ("porcentajeBarraSwift");
    document.getElementById("barraMySQL").classList.toggle ("porcentajeBarraMySQL");
}

let boton = document.getElementById('botonAnimar');
boton.addEventListener('click', function (){
    animacionBarras();
});
