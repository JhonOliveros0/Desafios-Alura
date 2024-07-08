let numero = prompt('Ingresa un numero');

// validacion del numero 0

if(numero == 0){
    alert('El numero es 0 por lo tanto no es ni menor o mayor');
} else{
    if (numero < 0) {
        alert('El numero es negativo');
    } else {
        alert('El numero es positivo');
    }
}