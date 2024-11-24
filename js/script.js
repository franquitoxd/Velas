function abrirModal(imagenSrc) {
    const modal = document.getElementById('modal');
    const imagenAmpliada = document.getElementById('imagenAmpliada');
    
    imagenAmpliada.src = imagenSrc;
    modal.style.display = 'flex';
}

function cerrarModal(event) {
    const modal = document.getElementById('modal');
    
    // Cierra el modal solo si el clic ocurre fuera de la imagen
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Asocia el evento de clic al modal completo
document.getElementById('modal').addEventListener('click', cerrarModal);

function comprarPorWhatsApp(producto, precio) {
    const numeroWhatsApp = '541165661343'; // Reemplaza este número con tu número de WhatsApp
    const mensaje = `Hola! Me interesa comprar ${producto} por $${precio}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// Función para mostrar la alerta
        function showAlert() {
            document.querySelector('.overlay').style.display = 'flex';
        }

        // Función para cerrar la alerta
        function closeAlert() {
            document.querySelector('.overlay').style.display = 'none';
        }

        // Mostrar la alerta al cargar la página
        window.onload = showAlert;