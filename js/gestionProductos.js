//------SERIA MI BASE DE DATOS---------//
class GestionProductos {
    iniciar(){
        listaProductos = [
            {"id": 1,
            "nombre": "Café Italiano",
            "descripcion": "Café tipo italiano, robusto, intenso, 100% granos arábigos...",
            "precio": 2400,
            "stock": 10,
            "img": "cafe-italiano.png",
            "promo": 1,
            },
            {"id": 2,
            "nombre": "Café Brasil",
            "descripcion": "Café tipo brasil, robusto, intenso, 100% granos arábigos...",
            "precio": 2400,
            "stock": 5,
            "img": "cafe-italiano.png",
            "promo": 0,
            },
            {"id": 3,
            "nombre": "Café Colombia",
            "descripcion": "Café tipo colombia, robusto, intenso, 100% granos arábigos...",
            "precio": 2400,
            "stock": 0,
            "img": "cafe-colombia.png",
            "promo": 0,
            },
            {"id": 4,
            "nombre": "Cafetera Filtro",
            "descripcion": "Cafetera de filtro con capacidad para 0,6L.",
            "precio": 6400,
            "stock": 1,
            "img": "cafetera-filtro.png",
            "promo": 0,
            },
            {"id": 5,
            "nombre": "Cafetera Italiana",
            "descripcion": "Cafetera tipo italiana, capacidad 6 expressos",
            "precio": 9400,
            "stock": 1,
            "img": "cafetera-italiana.png",
            "promo": 0,
            },
            {"id": 6,
            "nombre": "Jarro Pitcher",
            "descripcion": "Jarro pitcher profesional, para hacer el mejor latte art!",
            "precio": 8400,
            "stock":0,
            "img": "jarro-pitcher.png",
            "promo": 0,
            },
            
        ]
        let productosPromo =  listaProductos.filter(prod => prod.promo === 1);//Filtra productos en promoción (promo = 1)
        this.cargarProductos(productosPromo);
    }

    //---Se encarga de crear las cards de los productos y pushearlos dentro del HTML--//
    cargarProductos(listaProductos){
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = ""; //Aplicar innerHTML con string vació elimina cualquier elemento dentro de este.

        //---Si el array de objetos no contiene nada, ocurre lo siguiente---//
        if(productos.lenght == 0){
            this.mostrarMensaje("Actualmente no hay productos en stock");
            return false;
        //--En caso contrario, se recorre el array con un forEach y ACA SE CREAN LAS CARD DE LOS PRODUCTOS--/
        } else{
            listaProductos.forEach((prod) => {

                let id = prod.id;
                let nombre = prod.nombre;
                let descripcion = prod.descripcion;
                let precio = prod.precio;
                let img = prod.img;
            
                let cardProd = document.createElement("DIV");
            
                cardProd.classList.add("variedades");
            
                cardProd.innerHTML = `  <div>
                                            <img src="../assets/img/${img}" alt="cafe-italiano">
                                        </div>
                                        <div>
                                            <p class="nombre">${nombre}</p>
                                            <p class="info">${descripcion}</p>
                                            <p class="precio">${precio}</p>
                                            <form action="" method="post">
                                                <input class="boton-agregar-carrito" type="submit" value="Agregar al carrito">
                                            </form>
                                        </div>
                                    `
                divProductos.appendChild(cardProd)
            })
        }
    }
}
