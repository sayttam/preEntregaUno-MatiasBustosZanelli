let precioPorDia = 2000

console.log("Bienvenido a nuestra guarderia canina")

let nombreCanino = prompt("Ingresa el nombre de tu canino:")

if (nombreCanino == "" || nombreCanino == null) {
    console.warn("Debe ingresar el nombre del canino")
} else {
    console.log("Nombre del canino: ", nombreCanino)
}

let tamaño = parseInt(prompt("Ingresa el número correspondiente al tamaño de tu mascota: 1 - Pequeño, 2 - Mediano, 3 - Grande"))

if (tamaño !== 1 && tamaño !== 2 && tamaño !== 3) {
    console.warn("Ingrese un numero de tamaño valido")
} else {
    if (tamaño === 1) {
        console.log("Tamaño pequeño")
    } else if (tamaño === 2) {
        precioPorDia = precioPorDia * 1.25
        console.log("Tamaño mediano")
    } else if (tamaño === 3) {
        precioPorDia = precioPorDia * 1.5
        console.log("Tamaño grande")
    }
}

let dias = parseInt(prompt("Indica el numero de dias que nos acompañara en la guarde:"))

dias = Number(dias).toFixed(0)

if (dias >= 10 && dias < 20) {
    precioPorDia = precioPorDia * 0.9
    console.log("Cantidad de dias: ", dias)
} else if (dias >= 20 && dias < 9999) {
    precioPorDia = precioPorDia * 0.85
    console.log("Cantidad de dias: ", dias)
} else {
    console.warn("Ingrese un numero de dias!")
}

function calcularPrecioEstadia(diasEstadia) {
    let estadia = precioPorDia * diasEstadia
    return estadia
}

estadia = calcularPrecioEstadia(dias)

function mostrarPrecioDia(precioTotal) {
    console.log("El importe detallado es:")
    for (i = 1; i <= dias; i++) {
        console.log(i + "° dia. Costo: ", (precioTotal / dias))
    }
}

mostrarPrecioDia(estadia)

console.log("Total de la estadia: ", calcularPrecioEstadia(dias))

