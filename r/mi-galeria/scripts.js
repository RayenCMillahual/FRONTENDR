// Seleccionamos todas las imágenes de la galería
const images = document.querySelectorAll('.gallery img');

// event listener a cada imagen
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

//elementos para el modal
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const closeModal = document.createElement('span');

// Estilo básico para el modal
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.opacity = '0';
modal.style.visibility = 'hidden';
modal.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

// Estilo para la imagen en el modal
modalImage.style.maxWidth = '90%';
modalImage.style.maxHeight = '80%';

// Estilo para el botón de cerrar
closeModal.innerText = 'X';
closeModal.style.position = 'absolute';
closeModal.style.top = '10px';
closeModal.style.right = '20px';
closeModal.style.color = 'white';
closeModal.style.fontSize = '2rem';
closeModal.style.cursor = 'pointer';

// Añadir la imagen y el botón de cerrar al modal
modal.appendChild(modalImage);
modal.appendChild(closeModal);
document.body.appendChild(modal);

//abrir el modal
images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    });
});

// cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
});

let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].classList.remove('visible');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('visible');
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);
