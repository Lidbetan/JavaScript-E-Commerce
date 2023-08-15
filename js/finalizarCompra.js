
//Traigo el carrito guardado en local storage
carrito = JSON.parse( localStorage.getItem(key_carrito));
//Creo el objeto datos, el cual contiene las propiedades y valores correspondientes a los datos a validar.
const datosTarjeta = {                 
    numero:"",
    nombre:"",
    vencimiento:"",
    cvc: "",
}
//Creo los elementos asociados a los inputs del formulario
const numInput = document.querySelector("#numero");
const nombreInput = document.querySelector("#nombre");
const vencimientoInput = document.querySelector("#vencimiento");
const cvcInput = document.querySelector("#cvc");
const formulario = document.querySelector(".formulario");
//Escucho los eventos tipo input y lo manejo asignando su valor al elemento correspondiente
numInput.addEventListener("input", leerTexto);
nombreInput.addEventListener("input", leerTexto);
vencimientoInput.addEventListener("input", leerTexto);
cvcInput.addEventListener("input", leerTexto);

//Evento submit
formulario.addEventListener("submit", function(e){
    e.preventDefault(); //evito que realice la acción por default, que es enviar el form.
    //Valido el formulario
    const {numero, nombre, vencimiento, cvc} = datosTarjeta;
    if(numero === "" || nombre ==="" || vencimiento  ===""|| cvc ==="" ) {
        //Muesta el error:"Todos los campos son obligatorios"
        Swal.fire({
            title:"Todos los campos son obligatorios",
        })
        return;
    }else {
        //Arroja la lista de productos comprados, el precio, la cantidad, el total y un mensaje de agradecimiento.
        let contenedorMsj = document.querySelector(".contenedor-comprados-gracias");
        contenedorMsj.innerHTML = "";
        let total = 0;

        carrito.forEach((producto) => {
            const { id, nombre, descripcion, precio, img, cantidad} = producto

                const comprados = document.createElement("DIV");
                comprados.classList.add("comprados");
                total += parseInt(precio) * cantidad;
                comprados.innerHTML= `
                                        <div>
                                           <p> ${nombre} $${precio}  x${cantidad} </p>
                                        </div>
                                        `;
                contenedorMsj.appendChild(comprados);
                });

                const totalGracias = document.createElement("DIV");
                totalGracias.classList.add("mensaje-exito");
                totalGracias.innerHTML= `
                                        <div>
                                            <p>El total de su compra es: $${total}</p>
                                        </div>
                                        <div>
                                            <h3>Muchas gracias por su compra!</h3>
                                        </div>

                `;
                contenedorMsj.appendChild(totalGracias);

                let contenedorVolver = document.querySelector(".contenedor-finalizar");
                const volver = document.createElement("DIV");
                //volver.setAttribute("href", "javascript:resetearCarrito()");
                volver.classList.add("volver");
                volver.innerHTML= `
                                <a href="./carritoComprasJS.html" class="boton-agregar-carrito btn btn-primary">
                                    Volver a la página principal
                                </a>
                `;
                contenedorVolver.appendChild(volver);

    }
})

function leerTexto(e){
    datosTarjeta[e.target.id] = e.target.value;
    console.log(datosTarjeta);
}

/*function resetearCarrito(){
    if (carrito.lenght != 0){
        carrito = [];
        return carrito
    }
    localStorage.setItem(key_carrito, JSON.stringify( carrito ))
}*/













