/*Se hizo la constante validador que contiene los metodos 
de enmascarar y validar el numero de tarjeta*/
const validator ={
  //Se enmascarar el numero de la tarjeta dejando solo los ultimos 4 digitos
     maskify : (creditcardNumber) =>{
         var numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta
         var tarjetaEnmascarada = creditcardNumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta
         if (creditcardNumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara
             /*Repite el numero de la tarjeta enmascardo exepto los ultimos 4*/
             tarjetaEnmascarada = numeral.repeat(creditcardNumber.length-4) + creditcardNumber.slice(-4) 
         }
         return tarjetaEnmascarada;
     },
     //Se valida el numero de tarjeta
     isValid: (creditCardNumber) =>{

         var retorno= false;
         //se comienza a numerar el largo de la tarjeta desde cero
             let suma = 0;
             //Se crea un for que recorre el largo de la numero de la tarjeta obteniendo un numero en cada posicion//
             for(let i = 0; i < creditCardNumber.length; i++) {
               //se obtiene un nuemro en la posicion i de la cadena del numero de tarjeta
               let numero = parseInt(creditCardNumber.charAt(i));
               //determina si la variable i contiene un numero par
                 if (i%2== 0) {
                   //Se multiplican los pares por dos//
                     let multiplica= numero *2;
                     if (multiplica > 9){ //los resultados mayores a 9, se la aplica un toString q los separa y los suma uno con el otro
                         let multiplicaString = multiplica.toString(); 
                         multiplica = parseInt(multiplicaString.charAt(0)) + parseInt(multiplicaString.charAt(1));
                         
                     }
                     suma = suma + multiplica;
                     
                 }else {
                     suma = suma + numero;
                 }
             }
             //determina si la suma es multiplo de 10 (termina en cero)
             if (suma%10== 0) {
                 retorno= true;
             }
         return retorno;
     } 
 }

 
 export default validator;