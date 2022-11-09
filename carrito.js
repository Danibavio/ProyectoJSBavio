const totalCarrito = () => {
    carritoContainer.innerHTML= "";
    carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h1 class="carrito-titulo">Carrito</h1>
    `;
    carritoContainer.append(carritoHeader);

    const carritobutton = document.createElement("h2");
    carritobutton.innerText = "❌";
    carritobutton.className = "carrito-button"

    carritobutton.addEventListener("click", ()=> {
        carritoContainer.style.display = "none"
    });

    carritoHeader.append(carritobutton);



    carrito.forEach((prod) => {
    const {id, nombre, precio, img, cantidad} = prod
    let carritoContent = document.createElement("div")
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>$${precio}</p>
    <p>Cantidad: ${cantidad}</p>
    <p>Total: ${cantidad * precio}</p>
    `;

    carritoContainer.append(carritoContent);

    let borrar = document.createElement("span")
    borrar.innerText = "✖";
    borrar.className = "eliminar-camiseta";
    carritoContent.append(borrar)

    borrar.addEventListener("click", borrarProducto);
});

    const total = carrito.reduce((acc , camiseta) => acc + camiseta.precio * camiseta.cantidad , 0 );

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`
    carritoContainer.append(totalCompra);

    const continuarCompra = document.createElement("button")
    continuarCompra.className = "buttonCarrito"
    continuarCompra.innerHTML = `Finalizar compra
    `
    carritoContainer.append(continuarCompra)

    continuarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Agregá al menos una camiseta para continuar",
            icon: "error",
            confirmButtonText: "Continuar",
            });
        } else {
        (async() =>{
            const {value: email } = await Swal.fire({
                title: "Tu carrito se guardó correctamente",
                icon: "success",
                html: '<b>Ingresa tu email para enviarte los datos de la compra</b>',
                input: "email",
            })
            if (email){
                Swal.fire({
                    title: 'LISTO!',
                    imageUrl: './assets/messi.jpg',
                    imageWidth: 250,
                    text:`Te enviamos un correo a: "<b>${email}</b>" para continuar la compra.`,
                    footer: 'gracias por tu compra <3'
                })
            }
        })()
            
            
        }
        });
    }

verCarrito.addEventListener("click", totalCarrito)

const borrarProducto = () => {
    const encontarId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontarId;
    });
    guardarEnLocal()
    totalCarrito()


}

