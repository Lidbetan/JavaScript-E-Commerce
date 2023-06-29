document.addEventListener("DOMContentLoaded", () => {

    let realizar_compra = "";
    realizar_compra = prompt("Va a realizar alguna compra, por favor responda SI o NO").toLocaleUpperCase();

    let validacion = validarCompra(realizar_compra);

    while (validacion != true) {
        realizar_compra = prompt("Respuesta inválida. Por favor, ingrese SI o NO");
        validacion = validarCompra(realizar_compra);
    } /*Cuando NO ingreso "SI" o "NO", validación es false, en dicho caso me vuelve a pedir que ingrese una respuesta válida*/

    if (validacion) { /*La variable validación depende de la funcion validar_compra, cuando esta arroja true, se ejecuta el código siguiente*/

        if (realizar_compra == "SI") {
            let articulo = "";
            let carrito = "";
            let total_compra = 0;

            while (articulo != "ESC") {
                articulo = prompt("Ingrese el código del artículo y/o ESC para finalizar").toLocaleUpperCase();

                if (articulo === "ESC") {
                    alert("Artículos comprados:\n" + carrito + "\nEl total de su compra es de:\n$" + total_compra + "\nGracias por su compra");
                    break;/*Reemplacé switch por el siguiente código. De esta forma declaro una nueva variable productoDisponible
                           que tiene como valor una función/método find, que retorna el id del producto y lo compara con el input
                           ingresado por el usuario, por lo que TIENE QUE SER CONVERTIDO EN NUM mediante parseInt */ 
                } else {

                    let productoDisponible = arrayProductos.find(function(producto) {
                        return producto.getId() === parseInt(articulo);
                    });
                    if (productoDisponible && productoDisponible.getStock() > 0) {//Si el input coincide con un producto con stock > 0
                        carrito += productoDisponible.descripcionProducto() + "\n";//obtenido mediante la función getStock(), suma el
                        total_compra += productoDisponible.getPrecio();            //artículo al carrito.
                    } else {
                        alert("Este producto no se encuentra disponible");
                        }  
                    }
                }
            } else if (realizar_compra == "NO") {//Si la respuesta ingresada por el usuario inicialmente fuera "NO", arroja el siguiente mensaje.
                alert("Que tenga buen día");
                }
        }

    }
);






