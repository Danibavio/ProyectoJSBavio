const cardCamisetas = document.getElementById("cardCamisetas");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const verCarrito = document.getElementById("verCarrito");

const carritoContainer = document.getElementById("carrito-container");

fetch('data.json')
.then((response)=> response.json)
.then((info)=>mostrarCamisetas(info))

const mostrarCamisetas = (camisetas) => {
    camisetas.forEach((prod)=> {
        const {id, nombre, precio, img, cantidad} = prod
        let content = document.createElement("div");
        content.className = "card"
        content.innerHTML = `
        <img src="${img}">
        <h3>${nombre}</h3>
        <p class="precio">$${precio}</p>
        `;
        

        cardCamisetas.append(content);

        let comprar = document.createElement("button")
        comprar.className = "button"
        comprar.innerText = "Comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {

        const repetir = carrito.some((repetirProducto) => repetirProducto.id === id);
        console.log(repetir)
        if(repetir){
            carrito.map((prod) => {
                if(prod.id === id){
                    prod.cantidad ++;
                }
            })
        } else {
            carrito.push({
                id : id,
                img : img,
                nombre : nombre,
                precio : precio,
                cantidad: cantidad,
                
            });
        }
            console.log(carrito)
            guardarEnLocal();
        });

    });


}
    
const guardarEnLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}