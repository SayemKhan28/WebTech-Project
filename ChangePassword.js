
let form = document.getElementById("changePasswordForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

   
    let email = document.getElementById("email").value.trim();
    let currentPassword = document.getElementById("currentPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

  
    let emailInput = document.getElementById("email");
    let currentInput = document.getElementById("currentPassword");
    let newInput = document.getElementById("newPassword");
    let confirmInput = document.getElementById("confirmPassword");

  
    function showError(id, input, message) {

        document.getElementById(id).innerText = message;

        input.classList.add("errorBorder");
        input.classList.remove("successBorder");

        valid = false;
    }

  
    function showSuccess(id, input) {

        document.getElementById(id).innerText = "";

        input.classList.remove("errorBorder");
        input.classList.add("successBorder");
    }

    if (email === "") {
        showError("emailError", emailInput, "Email is required");
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("emailError", emailInput, "Enter a valid email");
    }
    else {
        showSuccess("emailError", emailInput);
    }

   
    if (currentPassword === "") {
        showError("currentPasswordError", currentInput,
            "Current password is required");
    }
    else {
        showSuccess("currentPasswordError", currentInput);
    }

  
    if (newPassword === "") {
        showError("newPasswordError", newInput,
            "New password is required");
    }
    else if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(newPassword)) {
        showError("newPasswordError", newInput,
            "Password needs 8 characters, 1 letter and 1 number");
    }
    else if (newPassword === currentPassword) {
        showError("newPasswordError", newInput,
            "New password must be different from current password");
    }
    else {
        showSuccess("newPasswordError", newInput);
    }

    if (confirmPassword === "") {
        showError("confirmPasswordError", confirmInput,
            "Please confirm your password");
    }
    else if (confirmPassword !== newPassword) {
        showError("confirmPasswordError", confirmInput,
            "Passwords do not match");
    }
    else {
        showSuccess("confirmPasswordError", confirmInput);
    }

    
    if (valid) {
        alert("Password Changed Successfully!");

        form.reset();

        document.querySelectorAll("input").forEach(function(input) {
            input.classList.remove("successBorder");
        });
    }

});
