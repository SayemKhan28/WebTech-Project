
let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    let valid = true;

    if (email === "") {
        document.getElementById("emailError").innerText =
            "Email is required";

        emailInput.classList.add("errorBorder");
        emailInput.classList.remove("successBorder");

        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";

        emailInput.classList.add("errorBorder");
        emailInput.classList.remove("successBorder");

        valid = false;
    }
    else {
        document.getElementById("emailError").innerText = "";

        emailInput.classList.remove("errorBorder");
        emailInput.classList.add("successBorder");
    }
    if (password === "") {
        document.getElementById("passwordError").innerText =
            "Password is required";

        passwordInput.classList.add("errorBorder");
        passwordInput.classList.remove("successBorder");

        valid = false;
    }
    else {
        document.getElementById("passwordError").innerText = "";

        passwordInput.classList.remove("errorBorder");
        passwordInput.classList.add("successBorder");
    }

    if (valid) {
        alert("Login Successful!");
        form.reset();

        emailInput.classList.remove("successBorder");
        passwordInput.classList.remove("successBorder");
    }

});



document.getElementById("forgotBtn").addEventListener("click", function() {

    let email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Please enter your email first");
    }
    else {
        alert("Password reset request for: " + email);
    }

});



document.getElementById("changeBtn").addEventListener("click", function() {
    
    /*
    let email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Please enter your email first");
        return;
    }

    let oldPassword = prompt("Enter your old password:");

    if (oldPassword === null || oldPassword === "") {
        alert("Old password is required");
        return;
    }

    let newPassword = prompt("Enter your new password:");

    if (newPassword === null || newPassword === "") {
        alert("New password is required");
        return;
    }

    if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(newPassword)) {
        alert("Password must contain at least 8 characters, 1 letter and 1 number");
        return;
    }

    alert("Password change request submitted!");
            */
});
                  