
const verifyForm = document.getElementById("verifyForm");

verifyForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const code = document.getElementById("verificationCode").value.trim();

    const codeError = document.getElementById("codeError");

    const codeInput = document.getElementById("verificationCode");

    codeError.textContent = "";

    codeInput.classList.remove("errorBorder", "successBorder");

    if (code === "") {

        codeError.textContent = "Verification number is required!";
        codeInput.classList.add("errorBorder");

    }

    else if (!/^\d+$/.test(code)) {

        codeError.textContent = "Enter a valid number!";
        codeInput.classList.add("errorBorder");

    }

    else {

        codeInput.classList.add("successBorder");

        alert("Verification number submitted successfully!");

        window.location.href = "login.html";

    }

});
