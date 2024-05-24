//se define el arreglo

let arreglo = []





function construirArrgelo(largo) {
    arreglo.length = largo


}

function Arreglollenar() {

    for (let i = 0; i < arreglo.length; i++) {
        let nuneroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = nuneroAleatorio
    }
    alert("Arreglo:" + arreglo)
    console.log(arreglo)
}

function promedioArreglo() {
    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal = sumaTotal + arreglo[i];

    }

    alert("El promedio es:" + sumaTotal)
    console.log("El promedio es:" + sumaTotal)
    return sumaTotal / arreglo.length
}


function mayoresPromedio() {
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > promedio) {
            cantidadDeElementos++;
        }

    }
    return cantidadDeElementos
}

function sumaValor(Valor) {
    var Valor = parseInt(prompt("Digite un valor a sumar con el arreglo"))
    for (let index = 0; index < arreglo.length; index++) {
        resultado = Valor + arreglo[index]
        console.log("La suma de ", arreglo[index], " + ", Valor, " es igual a: ", resultado)
    }
    return Valor
}
function sumaImPares() {
    let totalImpares = 0

    for (let i = 0; i < arreglo.length; i++) {

        if ((arreglo[i] % 2) != 0) {
            totalImpares = totalImpares + arreglo[i]
        }

    }
    console.log("El total de la suma con numeros impares es: ", totalImpares)
    return totalImpares
}
function mayorArreglo() {
    let valorMayor = 0

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] > valorMayor) {
            valorMayor = arreglo[i]
        }

    }
    console.log("El valor mas gande del arreglo es: ", valorMayor)
    return valorMayor
}
function mayorDiferencia() {

    let valorDiferenciaMayor = 0
    let diferencia = 0
    for (let i = 0; i <= arreglo.length; i++) {


        diferencia = arreglo[i] - arreglo[i + 1]


        if (diferencia < 0) {
            diferencia = diferencia * -1
        }

        if (diferencia > valorDiferenciaMayor) {
            valorDiferenciaMayor = diferencia
        }

    }
    console.log("El numero con mayor diferencia en el arreglo es: ", valorDiferenciaMayor)
    return valorDiferenciaMayor
}

function encontrarElemento(valorNumero) {
    let encontroNumero = false;
    for (let i = 0; i < arreglo.length; i++) {

        if (valorNumero == arreglo[i]) {
            encontroNumero = true

        }
    }

    return encontroNumero
}
function posicionElemento(valorNumero) {
    let encontroNumero = false;
    let posicion = -1;
    for (let i = 0; i < arreglo.length; i++) {

        if (valorNumero == arreglo[i]) {
            encontroNumero = true
            posicion = i;
            i = arreglo.length;
        }

    }

    if (encontroNumero) {
        return posicion
    } else {
        return -1
    }

}
function invertirArreglo() {

    let auxArregloInvertido = []
    auxArregloInvertido.length = arreglo.length
    let auxPosicion = 0

    for (let i = arreglo.length; i >= 0; i--) {
        auxArregloInvertido[auxPosicion] = arreglo[i];
        auxPosicion++;
    }
    arreglo = auxArregloInvertido
}

function insertarElemento(posicion, valor) {
    var posicion = parseInt(prompt("Digite una pocision a sustituir: "))
    var valor = parseInt(prompt("Digite un valor a asignar: "))
    arreglo[posicion] = valor


}
function mostrarHileraArreglo() {

    for (let i = 0; i < arreglo.length; i++) {
        console.log("Pocision ",i, " Valor ",arreglo[i])
    }

}

function finalizar() {
    ciclo = false
}


//Inicio programa

var largo = parseInt(prompt("Digite el largo del arreglo"))

construirArrgelo(largo);


var ciclo = true

do {

    var menu = parseInt(prompt("1. Llenar el arreglo\n 2.Promedios del arreglo\n3. Valores mayores del promedio\n4.Suma de todos los valores \n 5. Suma de los numeros impares \n 6.Numero mayor del arreglo \n 7.Diferencias ente 2 valores del arreglo \n 8.Encontrar un elemento en especifico \n 9.Posicion especifica de un elemento \n 10. Invertir el arreglo \n 11.Insertsr nuevo elemento \n 12. Mostrar arreglo \n13.Cerrar aplicacion"))

    switch (parseInt(menu)) {
        case 1:
            Arreglollenar();
            break;

        case 2:
            promedioArreglo()
            break;
        case 3:
            console.log("El promedio de numeros altos en el arreglos es igual a: ", mayoresPromedio())
            break;
        case 4:
            sumaValor()
            break;
        case 5:
            sumaImPares()
            break
        case 6:
            mayorArreglo()
            break
        case 7:
            mayorDiferencia()
            break
        case 8:
            let numeroConsulta = parseInt(prompt("Digite el numero a buscar dentro del arreglo: "))
            console.log("El resultado de la búsqueda fue: " + encontrarElemento(numeroConsulta))
            break
        case 9:
            let numeroConsultaPosicion = parseInt(prompt("Digite el numero a escoger para revelar su pocision: "))
            console.log("El numero a buscar si esta en el arreglo: " + posicionElemento(numeroConsultaPosicion))
            break
        case 10:
            invertirArreglo()
            console.log("El arreglo fue invertido")
            break
        case 11:

            insertarElemento()
            break
        case 12:
            mostrarHileraArreglo()
            break
        case 13:
            finalizar()
            break;
        default: alert("Esa no es una opcion disponible")
            break;

    }

} while (ciclo == true)



























































