/**
 * Suma los números de un array
 */
const sumDigits = (digits) => {
  let sum = 0;
  for(let index = 0; index < digits.length; index++) {
    sum += parseInt(digits[index]);
  }
  return sum;
}

/**
 * Valida el número de la tarjeta
 * Si la suma del de todos los digitos termina en cero (0)
 * el número es válido; de lo contrario es inválido.
 */
const isValidNumber = (newCardNumberArr) => {
  const sumArr = sumDigits(newCardNumberArr);
  const sumArrToString = parseInt(sumArr).toString().split('');
  // Utilizamos la cantidad de elements menos uno para acceder al ultimo elemento
  const lastNumber = parseInt(sumArrToString[sumArrToString.length - 1]);
  return lastNumber === 0;
}

/**
 * Crear máscara para proteger los números de la tarjeta,
 * excepto los últimos 4
 */
const maskify = (numberArr) => {
  if ( numberArr < 5 ) {
    return numberArr.join('');
  }

  for(let index = 0; index < numberArr.length - 4; index++) {
    numberArr[index] = '#';
  }
    return numberArr.join('');
}

/**
 * Validador de tarjeta
 */

    const cardValidator = ( cardNumber ) => {
  console.log(cardNumber);
  const errorMsg = {
    type:'error',
    message: 'El número de tarjeta es inválido.'
  };
  // Separar digitos en array con split
  const cardNumberArr = cardNumber.split('');

  for(let index = 0; index < cardNumberArr.length; index++) {
    // Verificamos primero si el elemento no es un numero
    if( parseInt(cardNumberArr[index]) === NaN ) {
      return errorMsg; // Detiene el programa
    }
    // Como es un numero, convertimos el numero (string) a numero (int)
    cardNumberArr[index] = parseInt(cardNumberArr[index]);
    
    if( index % 2 === 0 ) {
      const double = cardNumberArr[index] * 2;
      // [Inicio]: Paso 2
      if ( double > 9 ) {
        let doubleToString = parseInt(double).toString(); // 16
        doubleToString = doubleToString.split(''); // ['1', '6']
        // Sumamos los doubles
        const sumDoubles = sumDigits(doubleToString);
        // Reemplazamos el valor en el array original
        cardNumberArr[index] = sumDoubles;
      }
    }
    
    // [Inicio]: Paso 3 y 4
    if ( isValidNumber(cardNumberArr) ) {
      const maskifyCardNumber = maskify(cardNumber.split(''));
      return {
        type:'success',
        message: 'El número de tarjeta <b>' + maskifyCardNumber + '</b> es válido.'
      }
    } else {
      return errorMsg;
    }
  }
}

export default cardValidator;