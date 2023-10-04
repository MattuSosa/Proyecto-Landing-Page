
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        if (nombreInput.value.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        if (apellidoInput.value.trim() === '') {
            alert('Por favor, ingrese su apellido.');
            return;
        }

        const emailPattern = /^\S+@\S+\.\S+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return;
        }

        const phonePattern = /^\d{9,}$/;
        if (!phonePattern.test(telefonoInput.value)) {
            alert('Por favor, ingrese un número de teléfono válido.');
            return;
        }

        const formData = {
            nombre: nombreInput.value,
            apellido: apellidoInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
        };

        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        telefonoInput.value = '';

        enviarWhatsApp(formData);

        alert('Formulario enviado exitosamente.');
    });

    function enviarWhatsApp(formData) {
        const { nombre, apellido, email, telefono } = formData;
        const mensaje = `Bienvenido ${nombre} ${apellido} a nuestro boletín. Tu correo es ${email} y tu teléfono es ${telefono}.`;
        const enlaceWhatsApp = `https://wa.me/5492974334930?text=${encodeURIComponent(mensaje)}`;
        window.open(enlaceWhatsApp, '_blank');
    }
});
