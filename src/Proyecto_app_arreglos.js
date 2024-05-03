document.querySelector('#header').innerHTML = "Estoy leyendo do_while.js"


arreglo = []
var largo = parseInt(prompt("Digite la canitdad de elemntos del arreglo"))
function construir(largo) {
    arreglo.length = largo

}
construir(largo)




function llenarArrelgo() {
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
        console.log(arreglo)

    }

}
inicio = 11 //por el momento btw
do {
    var opcion = parseInt(prompt("1. Fill the Arreglo"))

    switch (opcion) {

        case 1:
            llenarArrelgo()
            break










    }



} while (inicio == 12);


























