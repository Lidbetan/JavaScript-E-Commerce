//Objeto con la lista de los productos seleccionables por el usuario y su respectivo precio
/*const listaProductos = [
    { nombre: "Café italiano", precio: 2400 },
    { nombre: "Café brasil", precio: 2400 },
    { nombre: "Café colombia", precio: 2400 },
    { nombre: "Cafetera filtro", precio: 6500 },
    { nombre: "Cafetera italiana", precio: 9700 },
    { nombre: "Jarra pitcher", precio: 8600 },
];*/

class StockProductos {//Clase constructora de objetos de la lista de productos disponibles.

    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    descripcionProducto() {
        return "#" + this.id + " - " + this.nombre + " $ " + this.precio;
    }
    getId() {
        return this.id;
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
        this.stock = nuevo_stock
    }
}
//Lista de productos disponibles, hecha a partir de la clase constructora.
let arrayProductos = new Array();
arrayProductos.push(new StockProductos(1, "Café italiano", 2400, 12));
arrayProductos.push(new StockProductos(2, "Café brasil", 2400, 4));
arrayProductos.push(new StockProductos(3, "Café colombia", 2400, 0));
arrayProductos.push(new StockProductos(4, "Cafetera italiana", 6500, 4));
arrayProductos.push(new StockProductos(5, "Cafetera filtro", 9700, 4));
arrayProductos.push(new StockProductos(6, "Jarra pitcher", 8600, 0));













