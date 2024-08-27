document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Capturar los datos del formulario de login
    const email = event.target[0].value;
    const password = event.target[1].value;

    // Crear objeto JSON
    const loginData = {
        email: email,
        password: password
    };

    // Mostrar en la consola (o en el DOM si lo prefieres)
    console.log(JSON.stringify(loginData));
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    const registerData = {
        name: name,
        email: email,
        password: password
    };

    console.log(JSON.stringify(registerData));
});
