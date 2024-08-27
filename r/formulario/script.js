document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const opciones = document.getElementById('opciones').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un objeto
    const datosFormulario = {
        nombre: nombre,
        email: email,
        opcionSeleccionada: opciones,
        mensaje: mensaje
    };
    console.log(datosFormulario);
    // O, si prefieres en formato JSON:
    // console.log(JSON.stringify(datosFormulario));
});
