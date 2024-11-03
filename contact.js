// contact.js

// Inicializa EmailJS con tu User ID
emailjs.init("xPw6PF0ef-Di5oFKO");  // Este es tu User ID

// Agrega un evento 'submit' al formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene la recarga de la página

    // Envía el formulario usando EmailJS
    emailjs.sendForm('service_xbrsts6', 'template_eht2dzq', this)  // 'template_eht2dzq' es tu Template ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error sending message');
        });
});
