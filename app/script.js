// Script para manejar el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto

    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    if (nombre && email && mensaje) {
        alert(`Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`);
        // Aquí puedes agregar código para enviar el formulario por email o almacenar los datos
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
