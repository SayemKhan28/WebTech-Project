
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let group = document.getElementById("group").value;
    let hsc = document.getElementById("hsc").value;
    let ssc = document.getElementById("ssc").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let valid = true;

   
    function showError(id, input, message) {

        document.getElementById(id).innerText = message;

        if (input) {
            input.classList.add("errorBorder");
            input.classList.remove("successBorder");
        }

        valid = false;
    }

    
    function showSuccess(id, input) {

        document.getElementById(id).innerText = "";

        if (input) {
            input.classList.remove("errorBorder");
            input.classList.add("successBorder");
        }
    }

    
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let groupInput = document.getElementById("group");
    let hscInput = document.getElementById("hsc");
    let sscInput = document.getElementById("ssc");

    
    if (name === "") {
        showError("nameError", nameInput, "Name is required");
    }
    else if (!/^[a-zA-Z ]+$/.test(name)) {
        showError("nameError", nameInput, "Enter a valid name");
    }
    else {
        showSuccess("nameError", nameInput);
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

   
    if (password === "") {
        showError("passwordError", passwordInput, "Password is required");
    }
    else if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(password)) {
        showError("passwordError", passwordInput,
            "Password needs 8 characters, 1 letter and 1 number");
    }
    else {
        showSuccess("passwordError", passwordInput);
    }

    
    if (!gender) {
        document.getElementById("genderError").innerText =
            "Please select your gender";
        valid = false;
    }
    else {
        document.getElementById("genderError").innerText = "";
    }

    
    if (group === "") {
        showError("groupError", groupInput, "Please select your group");
    }
    else {
        showSuccess("groupError", groupInput);
    }

    
    if (hsc === "") {
        showError("hscError", hscInput, "HSC GPA is required");
    }
    else if (Number(hsc) < 0 || Number(hsc) > 5) {
        showError("hscError", hscInput, "GPA must be between 0 and 5");
    }
    else {
        showSuccess("hscError", hscInput);
    }

   
    if (ssc === "") {
        showError("sscError", sscInput, "SSC GPA is required");
    }
    else if (Number(ssc) < 0 || Number(ssc) > 5) {
        showError("sscError", sscInput, "GPA must be between 0 and 5");
    }
    else {
        showSuccess("sscError", sscInput);
    }

    
    if (valid) {
        alert("Registration Successful!");
        form.reset();

        document.querySelectorAll("input, select").forEach(function(input) {
            input.classList.remove("successBorder");
        });
    }

});
