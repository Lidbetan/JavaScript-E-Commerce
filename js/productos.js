function validarCompra(realizar_compra) {
    if (realizar_compra == "SI" || realizar_compra == "NO") {
        return true;
    } else {
        return false;
    }
}

let realizar_compra = "";
realizar_compra = prompt("Va a realizar alguna compra, por favor responda SI o NO");

let validacion = validarCompra(realizar_compra);

while (!validacion) {
    realizar_compra = prompt("Respuesta inválida. Por favor, ingrese SI o NO");
    validacion = validarCompra(realizar_compra);
} /*Cuando NO ingreso "SI" o "NO", validación es false, entonces lo niego con el operador NOT
y me pide nuevamente que ingrese una respuesta válida*/

if (validacion) {

    if (realizar_compra == "SI") {
        let articulo = "";
        let lista_articulos = "";
        let total_compra = 0;

        while (articulo != "ESC") {
            articulo = prompt("Ingrese el código del artículo");
            if (articulo === "ESC") {
                alert("Artículos comprados: " + "\n" + lista_articulos + " " + "El total de su compra es de: " + "\n" + "$" + total_compra + " Gracias por su compra");
                break;
            } else {
                switch (articulo) {
                    case "1":
                        lista_articulos += "Cafe Italiano - $2400" + "\n";
                        total_compra += 2400;
                        break;
                    case "2":
                        lista_articulos += "Cafe Brasil - $2400" + "\n";
                        total_compra += 2400;
                        break;
                    case "3":
                        lista_articulos += "Cafe Colombia - $2400" + "\n";
                        total_compra += 2400;
                        break;
                    case "4":
                        lista_articulos += "Cafetera Filtro - $6500" + "\n";
                        total_compra += 2400;
                        break;
                    case "5":
                        lista_articulos += "Cafetera Italiana - $9700" + "\n";
                        total_compra += 2400;
                        break;
                    case "6":
                        lista_articulos += "Jarra Pitcher - $8600" + "\n";
                        total_compra += 2400;
                        break;
                    default:
                        alert("Ingrese el codigo correcto");
                }
            }
        }
    } else if (realizar_compra == "NO") {
        alert("Que tenga buen día");
    }

} 







/*function mostrarResultado(lista_articulos, total_compra) {

    alert("Artículos comprados: " + "\n" + lista_articulos + " " + "El total de su compra es de: " + "\n" + "$" + total_compra + " Gracias por su compra");

}*/


//Función de validación de la compra c/sus variables.





