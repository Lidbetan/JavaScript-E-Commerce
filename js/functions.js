/*Esta function sirve para validar la compra, toma como parámetro la variable realizar_compra, la cual se define con un prompt.
En caso de que el usuario ingrese "SI" o "NO", retorna true, por el contrario, retorna false*/
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


