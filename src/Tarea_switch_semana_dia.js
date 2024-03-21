document.querySelector('#header').innerHTML = "estoy leyendo el documento Switch"
var fruta
var mensaje
var userInput = prompt("Ingrese un dia de la semana")





function dia_lunes() {
    mensaje = "Hoy es lunes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_martes() {
    mensaje = "Hoy es martes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_miercoles() {
    mensaje = "Hoy es miercoles"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_jueves() {
    mensaje = "Hoy es jueves"
    document.querySelector('#header').innerHTML = mensaje;

  }

  function dia_viernes() {
    mensaje = "Hoy es viernes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_sabado() {
    mensaje = "Hoy es sabado"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_domingo() {
    mensaje = "Hoy es domingo"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_invalido() {
    mensaje = "Dia invalido, por favor escriba un dia del 1-7"
    document.querySelector('#header').innerHTML = mensaje;

  }
  





fruta = parseInt(userInput)//con parseInt se convierte a enteros

switch (fruta) {
case 1:
  dia_lunes()

break
case 2:
  dia_martes()

break
case 3:
  dia_miercoles()

break
case 4:
  dia_jueves()
break
case 5:
  dia_viernes()

break
case 6:
  dia_sabado()

break
case 7:
dia_domingo()

break

default : 
    dia_invalido()

}