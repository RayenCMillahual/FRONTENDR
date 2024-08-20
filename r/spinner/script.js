const button = document.getElementById('spinnerButton');
const spinner = document.getElementById('spinner');
const countdown = document.getElementById('countdown');

button.addEventListener('click', function() {
    // Cambiar el texto del botón y deshabilitarlo
    button.textContent = 'Procesando...';
    button.disabled = true;

    // Mostrar el spinner con animación
    spinner.classList.add('show-spinner');

    // Inicializar contador a 3 segu
    let timeLeft = 3;
    countdown.textContent = `Tiempo restante: ${timeLeft} segundos`;

    const timer = setInterval(function() {
        timeLeft -= 1;
        countdown.textContent = `Tiempo restante: ${timeLeft} segundos`;

        // Ocultar el spinner cuando el tiempo se acabe
        if (timeLeft === 0) {
            clearInterval(timer);
            spinner.classList.remove('show-spinner');
            countdown.textContent = '';
            button.textContent = 'Iniciar Proceso';
            button.disabled = false;
        }
    }, 1000); // Actualiza cada 1 seg
});
