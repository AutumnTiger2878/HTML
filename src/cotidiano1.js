document.querySelector('#header').innerHTML = "Estoy en el documento array"

var cesta = []
i = 0
function ver() {
    alert(cesta)
}
function agregar() {
    var agregar = prompt("Digite una nueva fruta")
    alert(cesta.push(agregar))
}
function espeecifico() {
    var especifica = prompt("Que fruta quiere eliminar de la cesta")
   while (i<=cesta.length) {
    if (i=especifica) {
        cesta.splice(especifica,1)
    }
   }
   


}
function quitar() {
    cesta.pop()
    alert("Se elimino correctamente")
}
var inicio = true
do {
    var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar fruta a la cesta\n3. eliminar ultima fruta a la cesta\n4. eliminar fruta especifica\n5. Salir")

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
            espeecifico()
            break
        case 5:
            inicio = false
            break
        default:
            alert("Esa no es una opcion")
            break


    }
i++;


} while (inicio==true)

