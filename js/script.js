function closeAlert() {
            const overlay = document.querySelector('.overlay');
            const alertBox = document.querySelector('.alert-box');

            // Agregar clases para ocultar con transición
            alertBox.classList.add('hidden');
            overlay.classList.add('hidden');

            // Retirar completamente del DOM tras la transición
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }

        // Mostrar la alerta al cargar la página
        window.onload = () => {
            const overlay = document.querySelector('.overlay');
            overlay.style.display = 'flex';

            // Asegurarse de que aparezca con transición
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
        };

        function abrirModal(imagen) {
            const modal = document.getElementById('modal');
            const imagenAmpliada = document.getElementById('imagenAmpliada');
            imagenAmpliada.src = imagen;
            modal.style.display = 'flex';
        }

        function cerrarModal(event) {
            if (event.target === document.getElementById('modal')) {
                document.getElementById('modal').style.display = 'none';
            }
        }

        function comprarPorWhatsApp(producto, precio) {
            const mensaje = `¡Hola! Estoy interesado en comprar ${producto} por un valor de $${precio}. ¿Me pueden ayudar?`;
            const enlace = `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}`;
            window.open(enlace, '_blank');
        }

        
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});