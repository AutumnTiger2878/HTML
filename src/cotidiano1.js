<<<<<<< HEAD
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
=======
document.querySelector('#header').innerHTML = "Estoy en el cotidiano 1"

var tareas = []
i = 0
var inicio = true


function ver() {
    alert(tareas)
}
function agregar() {
    var agregar = prompt("Digite una nueva tarea")
    alert(tareas.push(agregar))
}
function quitar_especifico() {
    var borrar = prompt("Ingrese el numero de la tarea que desea eliminar")
 tareas.splice(borrar, 1)

}
function modificar() {
    var modificacion= prompt("Tarea que reemplazara la actual")
    var number = prompt("Numero de la tarea a reemplazar")
    tareas[number]=modificacion
}
   

function quitar() {
    tareas.pop()
    alert("Se elimino correctamente")
}




do {
    

    var opcion = prompt("1. Ver elementos de la terminal\n2. Agregar tarea a la terminal\n3. eliminar ultima tarea a la terminal\n4. eliminar tarea especifica\n5. Modificar una tarea\n6. Salir")

    switch (parseInt(opcion)) {
        case 1: 
            ver()
            break;
        case 2:
            agregar()  
>>>>>>> eadf4a1a95cb6c25fe42164f7c02092f317b3dc0
            break;
        case 3:
            quitar()
            break
        case 4:
<<<<<<< HEAD
            espeecifico()
            break
        case 5:
            inicio = false
=======
           quitar_especifico()
            break
            case 5:
            modificar()
            break
        case 6:
            salida = prompt("Desea terminar ciclo?")
            if (ssalida == "sI"){
                inicio = false
            }
>>>>>>> eadf4a1a95cb6c25fe42164f7c02092f317b3dc0
            break
        default:
            alert("Esa no es una opcion")
            break


    }
<<<<<<< HEAD
i++;


} while (inicio==true)

=======
} while (inicio==true );
>>>>>>> eadf4a1a95cb6c25fe42164f7c02092f317b3dc0
