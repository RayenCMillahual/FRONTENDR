// obtener y mostrar los datos del JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const personajesContainer = document.getElementById('personajesContainer');

        // Recorremos el array de personajes y creamos elementos HTML para cada uno
        data.personajes.forEach(personaje => {
            const personajeDiv = document.createElement('div');
            personajeDiv.classList.add('personaje');
            personajeDiv.innerHTML = `
                <h2>${personaje.nombre}</h2>
                <p>Casa: ${personaje.casa}</p>
            `;
            personajesContainer.appendChild(personajeDiv);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
