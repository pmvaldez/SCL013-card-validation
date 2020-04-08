import cardValidator from './validator.js';

const elemExito = document.getElementById("exito");
const elemError = document.getElementById("error");
elemExito.style.display = 'none';
elemError.style.display = 'none';

/**
 * Realiza la validacion del numero del numero del
 * numero de la tarjeta ingresado desde la vista (input)
 */
function validarTarjeta() {
  // const cardValidNumber = '43451043936735';
  const numeroTarjeta = document.getElementById("number-card").value;
  if ( numeroTarjeta.length < 1 ) {
    document.getElementById("error").innerHTML = 'Debe ingresar un número de tarjeta';
    return false;
  }

  const validacion = cardValidator(numeroTarjeta);

  if (validacion.type === 'success') {
    // Mantenemos ocultado el mensaje de error
    elemError.style.display = 'none';
    // Mostramos el mensaje de exito
    elemExito.style.display = 'block';
    elemExito.innerHTML = validacion.message;
  } else {
    // Mantenemos ocultado el mensaje de exito
    elemExito.style.display = 'none';
    // Mostramos el mensaje de error
    elemError.style.display = 'block';
    elemError.innerHTML = validacion.message;
  }
}

document.getElementById('submit')
  .addEventListener('click', validarTarjeta, true);
