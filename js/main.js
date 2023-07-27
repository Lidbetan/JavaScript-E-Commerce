let carrito = new Array();
let listaProductos = new Array();

let gestor;

 //---Carga primero los productos EN STOCK ---//
document.addEventListener("DOMContentLoaded", ()=>{
    gestor = new GestionProductos();
    gestor.iniciar();
})


//---Agrega productos al carrito---//