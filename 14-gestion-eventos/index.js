// - En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"
const $btn = document.getElementById('btn')
$btn.addEventListener('click', () => {
    alert('click en el botón')
})

$("btn-2").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})