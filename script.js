alert("Bienvenide a Fulvito")

class camisetas {
    constructor(equipo, precio) {
        this.equipo = equipo;
        this.precio = precio;
    }
}

let camisetaRiver = new camisetas("River Plate", 1000)
let camisetaBocaJrs = new camisetas("Boca Juniors", 900)
let camisetaArgentina = new camisetas("Argentina", 2000)

let listaCamisetas = [camisetaRiver, camisetaBocaJrs, camisetaArgentina]

console.log(listaCamisetas)
let carrito =[]
let precioTotal = 0
let iva = 0.21

let listaEquipos = listaCamisetas.map((camisetas) => camisetas.equipo + " " + "$" + camisetas.precio)

alert("Estos son nuestros productos: \n - " + listaEquipos.join("\n - "))

let elegirCamiseta = prompt("Ingrese de que equipo quiere comprar o ingrese 'LISTO' para finalizar la compra.")

while(elegirCamiseta != "LISTO"){
    
    if (elegirCamiseta == "River"){
        let cantidadCamisetaRiver = prompt("Ingrese que cantidad de " + camisetaRiver.equipo + " desea comprar ")
            precioTotal = precioTotal + (cantidadCamisetaRiver * camisetaRiver.precio)
    }
    else if (elegirCamiseta == "Boca"){
        let cantidadCamisetaBoca = prompt("Ingrese que cantidad de " + camisetaBocaJrs.equipo + " desea comprar ")
            precioTotal = precioTotal + (cantidadCamisetaBoca * camisetaBocaJrs.precio)

    }
    else if (elegirCamiseta == "Argentina" || "Seleccion" || "arg"){
        let cantidadCamisetaArg = prompt("Ingrese que cantidad de " + camisetaArgentina.equipo + " desea comprar ")
            precioTotal = precioTotal + (cantidadCamisetaArg * camisetaArgentina.precio)
    }
    else{
        alert("No contamos con ese producto")
    }
    elegirCamiseta = prompt ("¿Queres la camiseta de algun otro equipo? \n Ingrese de que equipo quiere comprar o ingrese 'LISTO' para salir \n - " + listaEquipos.join("\n -"))
}
function calcularIVA(a, b){
    return a * b;
}
let resultadoFinal = calcularIVA(precioTotal, iva)
if (precioTotal != 0){
    alert ("el precio total con IVA incluido es: " + (precioTotal + resultadoFinal) + " pesos")
    }
alert("Gracias por tu compra")
    



