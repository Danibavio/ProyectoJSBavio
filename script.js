const camisetas = [
    {
        id: 1,
        nombre: "River Plate",
        precio: 2000,
        img: src="./assets/river camiseta.jpg.opdownload",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Boca Juniors",
        precio: 1500,
        img: src="./assets/boca.jpg.opdownload",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Selección Argentina",
        precio: 3000,
        img: src="./assets/argentina.jpg",
        cantidad: 1,
    },
]; 
const cardCamisetas = document.getElementById("cardCamisetas");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const verCarrito = document.getElementById("verCarrito");

const carritoContainer = document.getElementById("carrito-container");

camisetas.forEach((producto)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    `;

    cardCamisetas.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

    const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id);
    console.log(repetir)
    if(repetir){
        carrito.map((prod) => {
            if(prod.id === producto.id){
                prod.cantidad ++;
            }
        })
    } else {
        carrito.push({
            id : producto.id,
            img : producto.img,
            nombre : producto.nombre,
            precio : producto.precio,
            cantidad: producto.cantidad,
            
        });
    }
        console.log(carrito)
        guardarEnLocal();
    });

});
const guardarEnLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
