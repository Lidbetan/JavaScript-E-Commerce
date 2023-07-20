
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

function validarCompra(realizar_compra) {
    if (realizar_compra == "SI" || realizar_compra == "NO") {
        return true;
    } else {
        return false;
    }
}


function solicitar_datos_producto() {
    let check = true;
    while (check) {
        let msj = "";
        let nombre = prompt("Ingrese el nombre del producto").trim();
        let precio = parseFloat(prompt("Ingrese el precio"));
        let stock = parseFloat(prompt("Ingrese la cantidad en stock"));

        if (!nombre) {
            msj += "\nDeber ingresar nombre";
        }
        if (isNaN(precio)) {
            msj += "\nDebe ingresar un valor numérico en precio";
        }
        if (isNaN(stock)) {
            msj += "\nDebe ingresar un valor numérico en stock";
        }
        if (msj != "") {
            alert(msj);
            check = confirm("Desea cargar nuevamente los datos?");
        } else {

            return new StockProductos(nombre, precio, stock);
        }
    }
    return false;
}

function agregar_producto_nuevo() {
    let nuevoProducto = solicitar_datos_producto();

    if (nuevoProducto) {
        nuevoProducto.setId(gen_id);
        gen_id++;
        listaProductos.push(nuevoProducto);
        alert("Producto agregado con éxito")
    }

}

function eliminar_producto() {
    if (hay_stock()) {
        mostrar_array_stock();

        let id_ingresado = prompt("Ingrese el id del producto a eliminar").trim();
        if (isNaN(id_ingresado)) {
            alert("Debe ingresar un valor numérico correspondiente al ID del producto");
        } else {
            if (id_ingresado) {
                let producto_eliminar = listaProductos.find((prod) => prod.id == id_ingresado);
                if (producto_eliminar) {
                    let resp = confirm("Está seguro que desea eliminar el producto " +producto_eliminar.descripcionProductoAdmin()+ "?");
                    if (resp) {
                        listaProductos = listaProductos.filter((prod) => prod.id != id_ingresado);
                        alert("Producto eliminado con éxito");
                    }
                }
            }
        }

    }
}

function mostrar_stock() {
    if (hay_stock()) {
        let resp = prompt("Los productos se muestran ordenados segun su código.\n Desea verlos de forma Ascendente(A) o Descendente (D)?").toUpperCase();
        if (resp == "A") {
            listaProductos.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            })
        }
        if (resp == "D") {
            listaProductos.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                }
                if (a.id < b.id) {
                    return 1;
                }
                return 0;
            })
        }
        mostrar_array_stock();

    }
}

function mostrar_array_stock() {
    let mensaje = "Los productos en stock son:";

    listaProductos.forEach((producto) => {
        mensaje += "\n" + producto.descripcionProductoAdmin();
    })
    alert(mensaje);

}

function hay_stock() {
    if (listaProductos.length == 0) {
        alert("No hay productos en stock");
        return false;
    }
    return true;
}

function aplicar_descuento(){ 

    if(hay_stock) {
        let descuento = parseInt(prompt("Ingrese el descuento que desea aplicar"));

        if(!isNaN(descuento)){

            listaProductos.forEach((prod) => {
                prod.setDescuento(descuento);
            })
        }
        mostrar_array_stock();
    }
}