document.querySelector('#header').innerHTML = "Estoy en el documento array"

var canastoVacio = []
var canasto = ["Fresa", "Limon", "Kiwi"]

console.log(canasto)



canasto[0] = "Uva" //modificar el valor del array

console.log(canasto)

console.log(canasto.length)

canasto.push("Naranja", "Pera")
console.log(canasto)

canasto.push("Banano")
canasto.push("Pinapple")
console.log(canasto)


canasto.splice(2, 1)
console.log(canasto)

canastoVacio.push("Hola","OP","Lamon")
 console.log(canastoVacio)






var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar fruta a la cesta\n 3. eliminar fruta a la cesta\n 4. Salir ")


















