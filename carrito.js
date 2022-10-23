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


    carrito.forEach((producto) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <p>Total: ${producto.cantidad * producto.precio}</p>
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
};
verCarrito.addEventListener("click", totalCarrito)

const borrarProducto = () => {
    const encontarId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontarId;
    });
    guardarEnLocal()
    totalCarrito()
}

