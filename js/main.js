let nombreJugador = prompt("Ingresa el nombre del jugador");

let fechasYGoles;
let cantidadFechas;
let cantidadGoles;

do {
    cantidadFechas = prompt("Ingresa el NUMERO de la fecha. Para finalizar ingresa la palabra SALIR");
    if (cantidadFechas !== "salir"){
        cantidadGoles = parseInt (prompt("Ingresa el NUMERO de goles en dicha fecha"))
    let info = {
        fecha: cantidadFechas,
        goles: cantidadGoles
    }
    fechasYGoles.push(info)
    }
} while (cantidadFechas.toLocaleLowerCase() !== "salir")

    function calcularGoles() {
        let total = fechasYGoles.reduce((acc, cantidad) => acc + cantidad.goles, 0);
        return total;
    }

    console.log(calcularGoles)