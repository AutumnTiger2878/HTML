document.querySelector('#header').innerHTML = "estoy leyendo el documento Switch"
var fruta
var mensaje
var userInput = prompt("Ingrese el sabor de su fruta")





function jugo_de_fresas() {
    mensaje = "Batir fresas"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function jugo_de_naranja() {
    mensaje = "Batir naranja y mandarinas"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function servir_vaso_de_agua() {
    mensaje = "Sirveme un vaso con aguaa"
    document.querySelector('#header').innerHTML = mensaje;

  }
fruta = parseInt(userInput)//con parseInt se convierte a enteros 
switch (fruta) 
{
    case 1:  
    jugo_de_fresas()
break
    case 2:
    case 3:
    jugo_de_naranja()
break
default : 
    servir_vaso_de_agua()

}