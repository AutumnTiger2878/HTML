document.querySelector('#header').innerHTML = "Estoy en el documento array"

var cesta = []

function ver() {
    alert(cesta)
}
function agregar() {
    var agregar = prompt("Digite una nueva fruta")
    alert(cesta.push(agregar))
}
function quitar() {
    cesta.pop()
    alert("Se elimino correctamente")
}
var inicio = true
do {
    var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar fruta a la cesta\n3. eliminar fruta a la cesta\n4. Salir ")

    switch (parseInt(opcion)) {
        case 1:
            ver()
            break;
        case 2:
            agregar()
            break;
        case 3:
            quitar()
            break
        case 4:
            inicio = false
            break
        default:
            alert("Esa no es una opcion")
            break


    }



} while (inicio == true)















