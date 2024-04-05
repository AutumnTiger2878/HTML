var mensaje
mensaje = "Error"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

var inicio = true
function suma() {
    var num1 = prompt("Digite primer cifra")
    var num2 = prompt("Digite segunda cifra")
    alert(parseInt(num1) + parseInt(num2))

}
function resta() {
    var num1 = prompt("Digite primer cifra")
    var num2 = prompt("Digite segunda cifra")
    alert(parseInt(num1) - parseInt(num2))
}
function Multiplicacion() {
    var num1 = prompt("Digite primer cifra")
    var num2 = prompt("Digite segunda cifra")
    alert(parseInt(num1) * parseInt(num2))

    function Division() {
        var num1 = prompt("Digite primer cifra")
        var num2 = prompt("Digite segunda cifra")
        alert(parseInt(num1) / parseInt(num2))
        
    }
}
while(inicio==true){
    var def = "Esa no es una de las opcions disponibles"
    var respuesta = prompt("1 = Suma\n2 = Resta\n3 = Multiplicacion\n4 = Division\n5 = Salir calcu")

    switch (parseInt(respuesta)) {
        case 1:
            suma()

            break
        case 2:
            resta()
            break

        case 3:
            Multiplicacion()
            break

        case 4:
            Division()
            break
        case 5:
            inicio = false
            break



        default: alert(def)

    }
}