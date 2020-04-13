/*Se hizo la constante validador que contiene los metodos 
de enmascarar y validar el numero de tarjeta*/
const validator ={
  /*Se crea el metodo (funcion) para enmascarar el numero de la tarjeta
  dejando los ultimos 4 digitos*/
     maskify : function(creditcardNumber){
         var numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta//
         var tarjetaEnmascarada = creditcardNumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta//
         if (creditcardNumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara//
             /*Repite el numero de la tarjeta enmascardo exepto los ultimos 4*/
             tarjetaEnmascarada = numeral.repeat(creditcardNumber.length-4) + creditcardNumber.slice(-4) 
         }
         return tarjetaEnmascarada;
     },
 
     isValid: function(creditCardNumber){
         var retorno= false;
             let suma = 0;
             for(let i = 0; i < creditCardNumber.length; i++) {
               let numero = parseInt(creditCardNumber.charAt(i));
                 if (i%2== 0) {
                     let multiplica= numero *2;
                     if (multiplica > 9){
                         let multiplicaString = multiplica.toString();
                         multiplica = parseInt(multiplicaString.charAt(0)) + parseInt(multiplicaString.charAt(1));
                         
                     }
                     suma = suma + multiplica;
                     
                 }else {
                     suma = suma + numero;
                 }
             }
             if (suma%10== 0) {
                 retorno= true;
             }
         return retorno;
     } 
 }

 
 export {validator};