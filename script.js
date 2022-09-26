alert("Bienvenide a Fulvito")

let camisetaRiver = "River"
let precioCamisetaRiver = 1000
let stockCamisetaRiver = 9

let camisetaBoca = "Boca"
let precioCamisetaBoca = 900
let stockCamisetaBoca = 12

let camisetaArg = "Selección Argentina"
let precioCamisetaArg = 2000
let stockCamisetaArg = 18

let precioTotal = 0
let iva = 0.21
alert("Tenemos camisetas de los siguientes equipos: \n - River: $1000 stock: 9 \n - Boca: $900 stock: 12\n - Seleccion Argentina: $2000 stock: 18" )

let elegirCamiseta = prompt("Ingrese de que equipo quiere comprar o ingrese 'LISTO' para finalizar la compra.")

while(elegirCamiseta.toUpperCase() != "LISTO"){
    if (elegirCamiseta.toLowerCase() == "river"){
        let cantidadCamisetaRiver = prompt("Ingrese que cantidad de " + camisetaRiver + " desea comprar ")
        if (cantidadCamisetaRiver <= stockCamisetaRiver){
            prompt ("Ingrese el talle de camiseta que quiera \n -M \n -L \n -XL")
            precioTotal = precioTotal + (cantidadCamisetaRiver * precioCamisetaRiver)
        }
        else{
            alert("No contamos con el suficiente stock :(" )
        }
    }
    else if (elegirCamiseta.toLowerCase() == "Boca"){
        let cantidadCamisetaBoca = prompt("Ingrese que cantidad de " + camisetaBoca + " desea comprar ")
        if (cantidadCamisetaBoca <= stockCamisetaBoca){
            prompt ("Ingrese el talle de camiseta que quiera \n -M \n -L \n -XL")
            precioTotal = precioTotal + (cantidadCamisetaBoca * precioCamisetaBoca)
        }
        else{
            alert("No contamos con el suficiente stock :(" )
        }
    }
    else if (elegirCamiseta.toLowerCase() == "Argentina", "Seleccion", "arg"){
        let cantidadCamisetaArg = prompt("Ingrese que cantidad de " + camisetaArg + " desea comprar ")
        if (cantidadCamisetaArg <= stockCamisetaArg){
            prompt ("Ingrese el talle de camiseta que quiera \n -M \n -L \n -XL")
            precioTotal = precioTotal + (cantidadCamisetaArg * precioCamisetaArg)
        }
        else{
            alert("No contamos con el suficiente stock :(" )
        }
    }
    else{
        alert("No contamos con camisetas de ese equipo :(")
    }
    elegirCamiseta = prompt ("¿Queres la camiseta de algun otro equipo? \n Ingrese de que equipo quiere comprar o ingrese 'LISTO' para salir. \n - River: $1000 \n - Boca: $900 \n - Seleccion Argentina: $2000 ")
}
function calcularIVA(a, b){
    return a * b;
}
let resultadoFinal = calcularIVA(precioTotal, iva)
if (precioTotal != 0){
    alert ("el precio total con IVA incluido es: " + (precioTotal + resultadoFinal) + " pesos")
    }
    


