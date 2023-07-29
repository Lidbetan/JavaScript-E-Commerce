//--- Globales---//
let carrito = [];
let listaProductos = new Array();

let gestor;
const key_carrito = "productosCarrito";


 //---Carga primero los productos EN STOCK ---//
document.addEventListener("DOMContentLoaded", ()=>{
    //Extrae la clave valor (productosCarrito, carrito) almacenada en LOCAL STORAGE y la parsea.
    carrito = JSON.parse( localStorage.getItem(key_carrito) ) || []; //si no hay nada, devuelve un array vacio

    gestor = new GestionProductos();
    gestor.actualizarCarrito();//Actualiza el contador, el carrito y lo muestra en función de que haya algo
    gestor.iniciar();           //guardado en LOCAL STORAGE.
})

//---Busca productos en la barra de búsqueda---//
document.querySelector("#buscar").addEventListener("keyup",() =>{//Le pido que escuche cuando las teclas se dejen de apretar.
    let q = document.querySelector("#buscar").value; //Toma el valor de lo ingresado en la barra buscadora.
    
    if(q.length >= 4){//Si q tiene un largo mayor a dos caracteres, inicia el método buscar, que toma q como parámetro.

        gestor.buscar(q)

    }else{
        gestor.mostrarHeader("Productos en stock");
        gestor.iniciar();//Mi lista de productos visible arranca con aquellos que tienen stock por defecto
        //gestor.cargarProductos();  <----------------- Por lo cual no hace falta llamar con cargarProducto()
    }
})


//---Agrega productos al carrito---//
function addCarrito(id){
    
    //declaro la variable y creo la componente llamando al id(#row_) y concatenando el ID que yo le doy como parámetro.
    const prod_carrito = document.querySelector("#row_"+id);

    //genero las variables que vana darle titulo, precio e imagen al cart que voy a agregar al carrito
    let nombre = prod_carrito.querySelector("h3").textContent;//obtengo el contenido de texto del elemento.
    let precio = prod_carrito.querySelector(".precio").textContent.substring(1,prod_carrito.querySelector(".precio").textContent.length);
    /*con el método substring incluyo el texto desde el [1] hasta todo el largo del contenido, obviando de esta forma el símbolo $
    que me genera conflictos a la hora de querer calcular el total del carrito*/
    let img = prod_carrito.querySelector("img").src;//obtengo la ruta

    let cart = new Producto(id,nombre,null,precio,img);

    gestor.addCart(cart);
    console.log(cart)                                        
}



