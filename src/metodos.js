function construir(largo){
    arreglo.length = largo
}

function llenar(){

    let numeroAleatorio;
    for(let i = 0; i < arreglo.length; i++){
        numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
}

function promedioArreglo(){
let sumaTotal = 0;
for(let i = 0; i < arreglo.length; i++){
        sumaTotal = sumaTotal + arreglo[i];
}
return sumaTotal / arreglo.length
}


function mayoresPromedio(){
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;

    for(let i = 0; i < arreglo.length; i++){   
        if(arreglo[i] > promedio){
            cantidadDeElementos++;
        }
    }
    return cantidadDeElementos;
}


function sumaValor(aumentaArrelo){
    arreglo.length = arreglo.length + aumentaArrelo
}


function sumaImPares(){
    let totalImpares = 0

    for(let i = 0; i < arreglo.length; i++){
        
        if( (arreglo[i] % 2) != 0){
            totalImpares = totalImpares + arreglo[i]
        }
        
    }
    return totalImpares
}


function mayorArreglo(){
    let valorMayor = 0

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > valorMayor){
            valorMayor = arreglo[i]
        }

    }

    return valorMayor
}

function mayorDiferencia(){

    let valorDiferenciaMayor = 0
    let diferencia = 0
    for(let i = 0; i <= arreglo.length; i++){

        //sacar la diferencia
        diferencia = arreglo[i] - arreglo[i+1]

        //convertir en absoluto
        if(diferencia < 0){
            diferencia = diferencia*-1
        }

        //acá preguntamos si la diferencia entre las dos celdas es mayor al valor de diferencia que guardamos
        //Si es verdadero, guardamos esa diferencia
        //si es falso, no hace nada y sigue teniendo el mismo valorDiferenciaMayor que se había guardado
        if(diferencia > valorDiferenciaMayor){
            valorDiferenciaMayor = diferencia
        }
    }
    return valorDiferenciaMayor
}


function encontrarElemento(valorNumero){

    let encontroNumero = false;

    for(let i = 0; i < arreglo.length; i++){

        if(valorNumero == arreglo[i]){
            encontroNumero = true
        }

    }

    return encontroNumero
}


function posicionElemento(valorNumero){
    let encontroNumero = false;
    let posicion = -1;
    for(let i = 0; i < arreglo.length; i++){

        if(valorNumero == arreglo[i]){
            encontroNumero = true
            posicion = i;
            i = arreglo.length;
        }

    }

    //return
    if(encontroNumero){
        return posicion
    }else{
        return -1
    }

}



function invertirArreglo(){
    
    let auxArregloInvertido = []
    auxArregloInvertido.length = arreglo.length
    let auxPosicion = 0

    for(let i = arreglo.length; i >= 0; i--){
        auxArregloInvertido[auxPosicion] = arreglo[i];
        auxPosicion++;
    }
    arreglo = auxArregloInvertido
}



function insertarElemento(posicion, valor){

    //Llenar el auxiliar arreglo
    //no sirve hacerlo auxArreglo = arreglo;
    let auxArreglo = []
    auxArreglo.length = arreglo.length
    for(let i = 0; i < arreglo.length-1; i++){
        auxArreglo[i] = arreglo[i]
    }

    for(let i = posicion; i < arreglo.length-1; i++){
        if(i == posicion){
            arreglo[i] = valor 
            arreglo[i+1] = auxArreglo[i]
        }else{
            arreglo[i+1] = auxArreglo[i]
        }
    }



}


function mostrarHileraArreglo(){

    for(let i = 0; i < arreglo.length; i++){
        console.log("posición: "+i+" valor: "+arreglo[i])
    }

}


function finalizarAplicacion(){
    finalizar = true;
}