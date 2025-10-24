const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {

            form.reportValidity();
            return;
        }

        Swal.fire({
            title: 'Reserva realizada',
            text: 'Estarás recibiendo la reserva por correo electrónico',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {

            form.reset();
        });
    });
} else {
    console.warn('Formulario no encontrado en la página');
}

