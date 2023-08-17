key_carrito = "productosCarrito";
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

//Escucho los eventos tipo input y lo manejo asignando su valor al elemento correspondiente.
numInput.addEventListener("input", leerTexto);
nombreInput.addEventListener("input", leerTexto);
vencimientoInput.addEventListener("input", leerTexto);
cvcInput.addEventListener("input", leerTexto);

//Evento submit
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    //Valido el formulario
    const {numero, nombre, vencimiento, cvc} = datosTarjeta;
    if(numero === "" || nombre ==="" || vencimiento  ===""|| cvc ==="" ) {
        //Muesta el error:"Todos los campos son obligatorios"
        Swal.fire({
            title:"Todos los campos son obligatorios",
        })
        return;
    }else {
        //llama al método validados(), que arroja un mensaje que simula validar los datos de la tarjeta y requiere resolver la promise antes de arrojar la lista de artículos comprados.
        validados();
    }
})
//Esta función pasada como argumento de manejo de evento, permite asignar al objeto datosTarjeta el valor ingresado por el usuario en el input.
function leerTexto(e){
    datosTarjeta[e.target.id] = e.target.value;
    //console.log(datosTarjeta);
}

//Esta función vacía el carrito una vez arrojado el mensaje final los items e importe final.
function resetearCarrito(){
        carrito = [];
        localStorage.setItem(key_carrito, JSON.stringify( carrito ))
}

//Simula validar los datos de la tarjeta, arrojando un mensaje de verificación de datos y otro de confirmación luego de 2 segundos.
function validarTarjeta(){
    return new Promise( resolve=>{
        //verificacion
        Swal.fire({
            title:"Verificando los datos ingresados",
        });
        console.log("validando los datos ingresados, espere por favor...");
        //confirmación
        setTimeout(()=>{
            resolve("Datos verificados correctamente")
        },2000)
    })
};

async function validados(){
    try{
        const resultado = await validarTarjeta();
    /*Luego que se resuelve validarTarjeta(), se ejecuta el siguiente código:
        Arroja la lista de productos comprados, el precio, la cantidad, el total y un mensaje de agradecimiento.*/ 
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

                //--Una vez finalizada la compra, se procede a vaciar el carrito llamando al siguiente método--//
                resetearCarrito();

                //--Luego, con este boton se vuelve al index.html--//
                let contenedorVolver = document.querySelector(".contenedor-finalizar");
                const volver = document.createElement("DIV");
                volver.classList.add("volver");
                volver.innerHTML= `
                                <a href="./carritoComprasJS.html" class="boton-agregar-carrito btn btn-primary">
                                    Volver a la página principal
                                </a>
                `;
                contenedorVolver.appendChild(volver);
        Swal.fire({
            title:"",
            text:resultado,
        })
    }catch(error) {
        console.log(error)
    }
}
