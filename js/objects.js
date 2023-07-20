let gen_id = 1;

class StockProductos {//Clase constructora de objetos de la lista de productos disponibles.
    /**
     * 
     * @param {*} nombre del producto a agregar 
     * @param {*} precio del producto a agregar
     * @param {*} stock del producto a agregar
     */
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.id = -1;
    }
    /**
     * 
     * @returns Muestra la descripción completa de producto para el ADMIN
     */
    descripcionProductoAdmin() {
        return "#" + this.id + " - " + this.nombre + " $ " + this.precio + " - " + this.stock;
    }
    /**
     * 
     * @returns Muestra la descripción completa de producto para el USER 
     */
    descripcionProductoUser() {
        return "#" + this.id + " - " + this.nombre + " $ " + this.precio;
    }
    getId() {
        return this.id;
    }
    setId(nuevo_id) {
        this.id = nuevo_id;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(nuevo_precio) {
        this.precio = nuevo_precio;
    }
    getStock() {
        return this.stock;
    }
    setStock(nuevo_stock) {
        this.stock = nuevo_stock;
    }

    setDescuento(descuento) { //Aplica un descuento en función del monto ingresador por el ADMIN.
        let descuentoAplicado = 1 - (descuento / 100);
        return this.precio = this.precio * descuentoAplicado;
    }
}
let listaProductos = new Array();





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

















