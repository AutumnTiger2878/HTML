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
            break;
        case 3:
            quitar()
            break
        case 4:
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
            break
        default:
            alert("Esa no es una opcion")
            break


    }
} while (inicio==true );