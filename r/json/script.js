// Función para obtener y mostrar los datos del JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const usuariosContainer = document.getElementById('usuariosContainer');
        // Recorremos el array de usuarios y creamos elementos HTML para cada uno
        data.usuarios.forEach(usuario => {
            const usuarioDiv = document.createElement('div');
            usuarioDiv.classList.add('usuario');
            // Añadir contenido al div
            usuarioDiv.innerHTML = `
                <h2>${usuario.nombre}</h2>
                <p>Email: ${usuario.email}</p>
                <p>Edad: ${usuario.edad}</p>
            `;
            // Añadir el div al contenedor
            usuariosContainer.appendChild(usuarioDiv);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
