document.querySelector('#header').innerHTML = "Estoy leyendo do_while.js"









var er = 0
do{


er++
console.log(er)




var respuesta = prompt("1 = Suma\n2 = Resta\n3 = Multiplicacion\n4 = Division\n5 = Salir calcu")

    switch(parseInt(respuesta)){
    case 1:
    var num1 = prompt("Digite primer cifra")
    var num2 = prompt("Digite segunda cifra")
    alert(parseInt(num1)+parseInt(num2))
    
    break
    case 2:
        var num1 = prompt("Digite primer cifra")
        var num2 = prompt("Digite segunda cifra")
        alert(parseInt(num1)-parseInt(num2))
    break
    
    case 3:
        var num1 = prompt("Digite primer cifra")
        var num2 = prompt("Digite segunda cifra")
        alert(parseInt(num1)*parseInt(num2))
    break
    
    case 4:
        var num1 = prompt("Digite primer cifra")
        var num2 = prompt("Digite segunda cifra")
        alert(parseInt(num1)/parseInt(num2))
    break
    case 5:
        inicio = false
    break

    }
}while(er<5)