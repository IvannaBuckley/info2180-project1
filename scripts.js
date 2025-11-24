/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".newsletter .message");

    if (!form || !emailInput || !messageDiv) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        if (!email) {
            messageDiv.textContent = "Please enter a valid email address.";
            return;
        }

        messageDiv.textContent = `Thanks for subscribing, ${email}!`;
        emailInput.value = "";
    });
});
