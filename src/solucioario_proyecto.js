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
    console.log(sumaTotal)
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
    for (let index = 0; index < arreglo.length; index++) {
        Valor = arreglo[index] + arreglo[index]
        console.log(Valor)
    }

}
function sumaImPares() {
    let totalImpares = 0

    for (let i = 0; i < arreglo.length; i++) {

        if ((arreglo[i] % 2) != 0) {
            totalImpares = totalImpares + arreglo[i]
        }
        console.log(totalImpares)
    }
   
    return totalImpares
}








//Inicio programa

var largo = parseInt(prompt("Digite el largo del arreglo"))

construirArrgelo(largo);


var ciclo = true

do {

    var menu = parseInt(prompt("1. Llenar el arreglo\n 2.Promedios del arreglo\n3. Valores mayores del promedio\n4.Suma de todos los valores \n 5. Suma de los numeros impares \n 6.Numero mayor del arreglo \n .Diferencias ente 2 valores del arreglo \n 8.Encontrar un elemento en especifico \n 9.Posicion especifica de un elemento \n 10. Invertir el arreglo \n 11.Insertsr nuevo elemento \n 12. Mostrar arreglo \n13.Cerrar aplicacion"))

    switch (parseInt(menu)) {
        case 1:
            Arreglollenar();
            break;

        case 2:
            promedioArreglo()
            break;
        case 3:

            console.log(mayoresPromedio())

            break;
        case 4:
            sumaValor()


            break;
        case 5:
        sumaImPares()
            break

        case 6:


            ciclo = false


            break;
        default: alert("Esa no es una opcion disponible")
            break;

    }

} while (ciclo == true)



























































