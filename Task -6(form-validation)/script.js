document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error message elements
    let nameError = document.getElementById("name").nextElementSibling;
    let emailError = document.getElementById("email").nextElementSibling;
    let messageError = document.getElementById("message").nextElementSibling;
    let successMessage = document.getElementById("success-message");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "name") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "name@gmail.com") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});
