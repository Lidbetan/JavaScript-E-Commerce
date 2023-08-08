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
        alert("Todos los campos son obligatorios");
        return;
    }else {
        /*alert("Mensaje enviado con éxito");
        console.log(carrito);*/
        let contenedorMsj = document.querySelector(".contenedor-mensaje-exito");
        contenedorMsj.innerHTML = "";
        let total = 0;

        carrito.forEach((producto) => {
            const { id, nombre, descripcion, precio, img, cantidad} = producto

                const mensajeExito = document.createElement("DIV");
                mensajeExito.classList.add("mensaje-exito");
                total += parseInt(precio) * cantidad;
                mensajeExito.innerHTML= `
                                        <div>
                                            ${nombre}
                                        </div>
                                        <div>
                                            ${precio}
                                        </div>
                                        <div>
                                            ${cantidad}
                                        </div>


                                        `;
                contenedorMsj.appendChild(mensajeExito);
                });

                const precioTotal = document.createElement("DIV");
                precioTotal.classList.add("mensaje-exito");
                precioTotal.innerHTML= `
                                        <div>
                                            ${total}
                                        </div>
                                        <div>
                                            <h3>Muchas gracias por su compra!</h3>
                                        </div>

                `;
                contenedorMsj.appendChild(precioTotal);

    }
})

function leerTexto(e){
    datosTarjeta[e.target.id] = e.target.value;
    console.log(datosTarjeta);
}













