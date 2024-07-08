let puntuacion = 0;

while (puntuacion < 100) {
    puntuacion = prompt('Ingresa tu puntuacion');

    if (puntuacion >= 100) {
        alert('¡Felicidades, has ganado!');
    } else {
        alert('Intentalo nuevamente para ganar');
    }
}