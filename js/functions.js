/*Esta function sirve para validar la compra, toma como parámetro la variable realizar_compra, la cual se define con un prompt.
En caso de que el usuario ingrese "SI" o "NO", retorna true, por el contrario, retorna false*/
function validarCompra(realizar_compra) {
    if (realizar_compra == "SI" || realizar_compra == "NO") {
        return true;
    } else {
        return false;
    }
}








//Parte del código viejo, reemplazado utilizando el método find().
/*else {
    switch (articulo) {
        case "1":
            if (arrayProductos[0].getStock != 0) {
                carrito += arrayProductos[0].descripcionProducto() + "\n";
                total_compra += arrayProductos[0].getPrecio();
                break;
            } else {
                alert("Este producto no se encuentra disponible");
            };
        case "2":
            if (arrayProductos[1].getStock() != 0) {
            carrito += arrayProductos[1].descripcionProducto() + "\n";
            total_compra += arrayProductos[1].getPrecio();
            break;
            } else {
                alert("Este producto no se encuentra disponible");
            };
        case "3":
            if (arrayProductos[2].getStock() != 0) {
            carrito += arrayProductos[2].descripcionProducto() + "\n";
            total_compra += arrayProductos[2].getPrecio();
            break;
            } else {
                alert("Este producto no se encuentra disponible");
            };
        case "4":
            if (arrayProductos[3].getStock() != 0) {
            carrito += arrayProductos[3].descripcionProducto() + "\n";
            total_compra += arrayProductos[3].getPrecio();
            break;
            } else {
                alert("Este producto no se encuentra disponible");
                ;
            };
        case "5":
            if (arrayProductos[4].getStock() != 0) {
            carrito += arrayProductos[4].descripcionProducto() + "\n";
            total_compra += arrayProductos[4].getPrecio();
            break;
            } else {
                alert("Este producto no se encuentra disponible");
            };
        case "6":
            if (arrayProductos[5].getStock() != 0) {
            carrito += arrayProductos[5].descripcionProducto() + "\n";
            total_compra += arrayProductos[5].getPrecio();
            break;
            } else {
                alert("Este producto no se encuentra disponible");
            };
        default:
            alert("Ingrese el codigo correcto");
    }
}
 */   


