import {validator} from "./validator.js";


function enmascarar(inputTarjeta) {
    return validator.maskify(inputTarjeta);
    
}

function validar() {
    var elemExito = document.getElementById("exito");
    var elemError = document.getElementById("error");
    var tc= document.getElementById("tc");
    var inputTarjeta =document.getElementById("numeroTarjeta").value;
    if (inputTarjeta.length < 1) {
        document.getElementById("error").innerHTML = 'Debe ingresar un número de tarjeta';
       return false;
    }
    var valida= validator.isValid(inputTarjeta);
    if (valida){
        elemExito.innerHTML="Tarjeta Valida <i class='fas fa-check'></i>"; 
        elemExito.style.display="block";
        elemError.style.display="none";
        document.getElementById("numeroTarjeta").value= enmascarar(inputTarjeta);
        tc.vaule=inputTarjeta;
        
    } else{
        elemError.innerHTML="Tarjeta Invalida <i class='fas fa-times'></i>";
        elemExito.style.display="none";
        elemError.style.display="block";
    
    }
     
    
}



 window.onload= function(){
    let mes= document.getElementById("mes");
    let ano= document.getElementById("ano");

    for(let i = 1; i <= 12; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        mes.appendChild(opcion)
    }

    let yearActual = new Date().getFullYear();
    for(let i = yearActual; i <= yearActual + 8; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        ano.appendChild(opcion)
    }

    document.getElementById("submit").addEventListener('click',validar,true);

 }




