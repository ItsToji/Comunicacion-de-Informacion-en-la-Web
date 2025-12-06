emailjs.init("FjXqc8pJbi3VPE8vm");

const subscriptionForm = document.getElementById("formSuscripcion");

subscriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const subscriberEmail = document.getElementById("txtEmailSuscriber").value;

    const templateParams = {
        user_email: subscriberEmail,
        message: `El usuario con correo ${subscriberEmail} se ha suscrito al boletín.`,
    };

    emailjs.send("service_2124", "template_2124", templateParams).then(
        function (response) {
            console.log("Correo enviado con éxito!", response.status, response.text);
            Swal.fire({
                icon: "success",
                title: "¡Suscripción exitosa!",
                text: "Gracias por suscribirte. Revisa tu correo para más información.",
            });
        },
        function (error) {
            console.error("Error al enviar el correo:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al procesar tu suscripción. Inténtalo de nuevo más tarde.",
            });
        }
    );

    subscriptionForm.reset();
});
