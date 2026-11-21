
const form = document.getElementById("forgotForm");

const email = document.getElementById("email");
const previousPassword = document.getElementById("previousPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    email.classList.remove("errorBorder", "successBorder");
    previousPassword.classList.remove("errorBorder", "successBorder");

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.classList.add("errorBorder");
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email";
        email.classList.add("errorBorder");
        valid = false;
    }
    else {
        email.classList.add("successBorder");
    }

    if (previousPassword.value.trim() === "") {
        passwordError.textContent = "Previous password is required";
        previousPassword.classList.add("errorBorder");
        valid = false;
    }
    else {
        previousPassword.classList.add("successBorder");
    }

    if (valid) {
        alert("Form submitted successfully!");
        window.location.href='verify.html';
    }

});
