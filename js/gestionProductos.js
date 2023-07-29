//------SERIA MI BASE DE DATOS---------//
class GestionProductos {
    iniciar() {
        listaProductos = [
            {
                "id": 1,
                "nombre": "Café Italiano",
                "descripcion": "Café tipo italiano, robusto, intenso, 100% granos arábigos...",
                "precio": 2400,
                "stock": 10,
                "img": "cafe-italiano.png",
                "oferta": 1,
            },
            {
                "id": 2,
                "nombre": "Café Brasil",
                "descripcion": "Café tipo brasil, robusto, intenso, 100% granos arábigos...",
                "precio": 2400,
                "stock": 5,
                "img": "cafe-brasil.png",
                "oferta": 0,
            },
            {
                "id": 3,
                "nombre": "Café Colombia",
                "descripcion": "Café tipo colombia, robusto, intenso, 100% granos arábigos...",
                "precio": 2400,
                "stock": 0,
                "img": "cafe-colombia.png",
                "oferta": 0,
            },
            {
                "id": 4,
                "nombre": "Cafetera Filtro",
                "descripcion": "Cafetera de filtro con capacidad para 0,6L.",
                "precio": 6400,
                "stock": 1,
                "img": "cafetera-filtro.png",
                "oferta": 0,
            },
            {
                "id": 5,
                "nombre": "Cafetera Italiana",
                "descripcion": "Cafetera tipo italiana, capacidad 6 expressos",
                "precio": 9400,
                "stock": 1,
                "img": "cafetera-italiana.png",
                "oferta": 0,
            },
            {
                "id": 6,
                "nombre": "Jarro Pitcher",
                "descripcion": "Jarro pitcher profesional, para hacer el mejor latte art!",
                "precio": 8400,
                "stock": 0,
                "img": "jarro-pitcher.png",
                "oferta": 0,
            },

        ]
        let productosStock = listaProductos.filter(prod => prod.stock >= 1);//Filtra productos con stock disponible.
        this.cargarProductos(productosStock);
        /*let productosOferta = listaProductos.filter(prod => prod.oferta === 1);//Filtra productos en oferta
        this.cargarProductos(productosOferta);*/
    }

    //---Se encarga de crear las cards de los productos y pushearlos dentro del HTML--//
    cargarProductos(listaProductos) {
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = ""; //Aplicar innerHTML con string vació elimina cualquier elemento dentro de este.

        //---Si el array de objetos no contiene nada, ocurre lo siguiente---//
        if (listaProductos.lenght == 0) {
            this.mostrarMensaje("Actualmente no hay productos en stock");
            return false;
            //--En caso contrario, se recorre el array con un forEach y ACA SE CREAN LAS CARD DE LOS PRODUCTOS--/
        } else {
            listaProductos.forEach((prod) => {

                const { id, nombre, descripcion, precio, img, cantidad, stock} = prod;

                let producto = document.createElement("DIV");

                producto.classList.add("variedades");
                producto.id = "row_" + id;

                producto.innerHTML = `
                                        <div>
                                            <img src="../assets/img/${img}">
                                        </div>
                                        <div>
                                            <h3 class="nombre">${nombre}</h3>
                                        </div>
                                        <div>
                                            <p class="descripcion">${descripcion}</p>
                                        </div>
                                        <div>
                                            <p class="precio">$${precio}</p>
                                        </div>
                                        <div>
                                            <a href="javascript:addCarrito(${id})" class="boton-agregar-carrito btn btn-primary">
                                                Agregar al carrito
                                            </a>
                                        </div>
                                    `;
                divProductos.appendChild(producto)
            })
        }
    }

    //--- Método para mostrer un mensaje en #header_productos ---//
    mostrarHeader(msg) {
        const headerProductos = document.querySelector("#header_productos");
        headerProductos.innerHTML = msg;
    }

    //--- Método para buscar el valor ingresado en la barra de búsqueda y arrojar el resultado apropiado ---//
    buscar(valor) {
        let resultado = listaProductos.filter(producto => //mediante filter le pido que busque dentro de listaProductos productos en los cuales
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) || //el nombre incluya el valor pasado como parámetro
            producto.descripcion.toLowerCase().includes(valor.toLowerCase())//la descripción incluya el valor pasado como parámetro.
        );
        if (resultado.length > 0) { //Si encuentra productos que incluyan el valor pasado, procede a buscar si hay stock de los mismos.
            let resultado_stock = resultado.filter(producto => producto.stock >= 1)
            if (resultado_stock.length > 0) {//En caso de haber stock, carga los productos con dicho array.
                this.cargarProductos(resultado_stock);
            } else {//Si no hay stock, arroja el siguiente mensaje --FALTA TOASTIFY/SWA2
                alert("Actualmente no contamos con stock para ese producto")
            }

        } else {//Si no coincide lo buscado con algún producto indexado, arroja el siguiente mensaje -- FALTA TOASTIFY/SWA2
            alert("No se encontró el producto");
        }

    }

    addCart(item) {
        const existe = carrito.some(producto => producto.id === item.id);

        if (existe) { //en caso que el item ya esté en el carrito, lo suma a la cantidad de items actual
            const articulo = carrito.map(producto => {
                if (producto.id === item.id) {
                    producto.cantidad++;
                    return producto
                } else {
                    return producto;
                }
            })
        } else { //en caso que el item no esté en el carrito, lo agrega.
            carrito.push(item);
        }
        this.actualizarCarrito();
    }

    actualizarCarrito() {
        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();//método encargado de guardar el carrito en LOCAL STORAGE
    }

    mostrarCarrito() {
    
        //---Genero el componente---//
        let detalleCarrito = document.querySelector("#idCarrito");
        //---Trabajo con sus propiedades---//
        detalleCarrito.innerHTML = "";//Lo vacío
        let total = 0; //A partir de esta variable contabilizamos el valor total del carrito

        carrito.forEach((producto) => {
            const { id, nombre, descripcion, precio, img, cantidad} = producto

            const row = document.createElement("DIV");
            row.classList.add("row");
            total += parseInt(precio) * cantidad //sumaliza el precio por la cantidad de productos elegidos(del mismo tipo)

            row.innerHTML = `
                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                <img src="${img}" width="80"/>
                            </div>

                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                <p>${nombre}</p>
                            </div>
                            
                            <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                ${precio}  
                            </div>
                    
                            <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                ${cantidad}  
                            </div>
                            
                            <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom" id="eliminar-carrito">
                                <a href="javascript:eliminar(${id})">
                                    <i class="fa-solid fa-square-minus fa-2x"></i>
                                </a>
                            </div>
                            `;
            detalleCarrito.appendChild(row);
        });

        let rowTotal = document.createElement("DIV");
        rowTotal.classList.add("row");
        rowTotal.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <p>Total a pagar:</p>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${total}
                        </div>
        
                        `;
        detalleCarrito.appendChild(rowTotal);



    }
    //---Encargada de asociar el carrito al método que cuenta la cantidad de productos ---//
    actualizarContador(){
        let totalCarrito = this.contarProductos();//Declaro totalCarrito y le asigno el método encargado de entregar el total de productos.

        let contadorCarrito = document.querySelector("#badgeCarrito");//Crea la componente asociada al elemento con ID #badgeCarrito.
        contadorCarrito.innerHTML = totalCarrito; //Actualizo su contenido con el valor de totalCarrito



    }
    //---Encargada de actualizar el contador del carrito ---//
    contarProductos(){
        let contarProductos = 0;

        carrito.forEach((producto)=>{//Por cada producto dentro de carrito[], me devuelve la cantidad + el valor actual de contarProductos.
            contarProductos = contarProductos + parseInt(producto.cantidad);
        })
        return contarProductos;//Me retorna el valor actualizado.
    };

    //---Guardar en LOCAL STORAGE---//
    guardarCarrito(){
        localStorage.setItem(key_carrito, JSON.stringify( carrito ))
    }


}  


