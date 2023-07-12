document.addEventListener("DOMContentLoaded", () => {

    
    let mensajeInicio = confirm("Bienvenido a Locos por el Café, es usted ADMIN o USER?");//En caso de que confirm sea FALSE, pasa al menú de USER.
    while(mensajeInicio) {
        let mensaje = "Indique lo que desea hacer";
        mensaje += "\n1)Agregar producto";
        mensaje += "\n2)Eliminar producto";
        mensaje += "\n3)Mostrar productos en stock";
        mensaje += "\n4)Aplicar descuento";
        mensaje += "\n5)Salir";

        let resp = prompt(mensaje);
        

        switch(resp) {
            case "1" :
                    agregar_producto_nuevo();
                    break;
            case "2" :
                    eliminar_producto();
                    break;
            case "3" :
                    mostrar_stock();
                    break;
            case "4" :
                    aplicar_descuento();
                    break;
            case "5" :
                    alert("Que tenga buen día");
                    mensajeInicio = confirm("Bienvenido a Locos por el Café, es usted ADMIN?");
                    break;
            default :
                    alert("No ingresó una opción válida");  
                            
        }
    
    } if(mensajeInicio == false) {
        let realizar_compra = "";
    realizar_compra = prompt("Bienvenido/a USER, va realizar alguna compra, por favor responda SI o NO").toLocaleUpperCase();

    let validacion = validarCompra(realizar_compra);

    while (validacion != true) {
        realizar_compra = prompt("Respuesta inválida. Por favor, ingrese SI o NO").toLocaleUpperCase();
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
                    alert(`Artículos comprados:\n${carrito}\nEl total de su compra es de:\n ${total_compra}\n Gracias por su compra`);//("Artículos comprados:\n" + carrito + "\nEl total de su compra es de:\n$" + total_compra + "\nGracias por su compra");
                    break;/*Reemplacé switch por el siguiente código. De esta forma declaro una nueva variable productoDisponible
                           que tiene como valor una función/método find, que retorna el id del producto y lo compara con el input
                           ingresado por el usuario, por lo que TIENE QUE SER CONVERTIDO EN NUM mediante parseInt */ 
                } else {

                    let productoDisponible = listaProductos.find(function(producto) {
                        return producto.getId() === parseInt(articulo);
                    });
                    if (productoDisponible && productoDisponible.getStock() > 0) {//Si el input coincide con un producto con stock > 0
                        carrito += productoDisponible.descripcionProductoUser() + "\n";//obtenido mediante la función getStock(), suma el
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


    

    }
);






