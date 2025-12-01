// Este código se ejecuta una vez que todo el HTML de la página se ha cargado.
document.addEventListener('DOMContentLoaded', function () {
    // 1. Buscamos el formulario de contacto usando un ID.
    const formulario = document.getElementById('formulario-contacto');

    // Verificamos si encontramos el formulario antes de añadir el evento.
    if (formulario) {
        // 2. Le decimos al formulario que al intentar enviarse, ejecute nuestra función.
        formulario.addEventListener('submit', function (event) {

            // 3. Prevenimos el envío automático de la página para hacer la validación primero.
            event.preventDefault();

            // 4. Obtenemos el valor del campo 'nombre'. 
            // ASUMIMOS que el campo tiene el ID 'nombre' en el HTML.
            const campoNombre = document.getElementById('nombre');

            if (campoNombre && campoNombre.value.trim() === '') {
                // Si el campo está vacío (solo espacios en blanco o nada)
                alert('ERROR: Por favor, ingresa tu nombre. Es un campo obligatorio.');
                campoNombre.focus();

            } else {
                // Si la validación pasa:
                alert('¡Validación exitosa! El formulario está listo para ser enviado al servidor.');

                // Si quisieras que el formulario se enviara de verdad:
                // formulario.submit(); 
            }
        });
    }
});