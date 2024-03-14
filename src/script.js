var fresas;
var Peras;
var mangos;
var mensaje;


function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
  }
  function servir_vaso_de_agua() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
  }
  function jugo_de_peras() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
  }
  function jugo_de_mango() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje;
  }
 
mangos = false;
Peras = false;
fresas = false;

if (fresas) {
 mensaje = "Batir fresas"
  jugo_de_fresas();
} else if (Peras) {
mensaje = "Batir peras"
  jugo_de_peras();
} else if (mangos) {
mensaje = "Batir mangos"
  jugo_de_mango();
} else {
mensaje = "Servir agua"
  servir_vaso_de_agua();
}


   

  


  
  
  