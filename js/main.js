let carrito = new Array();
let listaProductos = new Array();

let gestor;

//----Carga primero los productos 
document.addEventListener("DOMContentLoaded", ()=>{
    gestor = new GestionProductos();
    gestor.iniciar();
})






