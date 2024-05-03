document.querySelector('#header').innerHTML = "Estoy leyendo for.js"


var numero = parseInt(prompt("Digite un numero a multiplicar"))
for (let index = 1; index < 11; index++) {
    respuesta = numero * index
    console.log(numero, " x ", index, " = ", respuesta)
 }
