document.querySelector('#header').innerHTML = "Estoy leyendo do_while.js"









var er = true
var mensaje = prompt('Quieres usart la calcu?(Si/No)')
    if (mensaje == "Si") {
do {

    var respuesta = prompt("1 = Suma\n2 = Resta\n3 = Multiplicacion\n4 = Division\n5 = Salir calcu")

    switch (parseInt(respuesta)) {
        case 1:
            var num1 = prompt("Digite primer cifra")
            var num2 = prompt("Digite segunda cifra")
            alert(parseInt(num1) + parseInt(num2))

            break
        case 2:
            var num1 = prompt("Digite primer cifra")
            var num2 = prompt("Digite segunda cifra")
            alert(parseInt(num1) - parseInt(num2))
            break

        case 3:
            var num1 = prompt("Digite primer cifra")
            var num2 = prompt("Digite segunda cifra")
            alert(parseInt(num1) * parseInt(num2))
            break

        case 4:
            var num1 = prompt("Digite primer cifra")
            var num2 = prompt("Digite segunda cifra")
            alert(parseInt(num1) / parseInt(num2))
            break
        case 5:
            er = false
            break

        default: alert("Esa no es una opcion")

    }
}while (er == true)
    

}
