/*--------CLASE DE PRODUCTOS---------*/
class Producto {
    constructor(id, nombre, descripcion, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img
    }
    
}





/*-------CARDS DE PRODUCTOS HECHOS CON JS------------*/

listaProductos.forEach((prod) => {
    let cardProd = document.createElement("DIV");

    cardProd.classList.add("variedades");

    cardProd.innerHTML = `  <a href="#">
                            <img src="../assets/img/cafe-italiano.png" alt="cafe-italiano">
                        </a>
                        <div>
                            <p class="nombre">Italiano</p>
                            <p class="info">Cod. 1 - Café tipo italiano, robusto
                                intenso, 100% granos arábigos...</p>
                            <p class="precio">$2400</p>
                            <form action="" method="post">
                                <input class="boton-agregar-carrito" type="submit" value="Agregar al carrito">
                            </form>
                        </div>
                        `
    
})

















