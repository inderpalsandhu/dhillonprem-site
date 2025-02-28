document.addEventListener("DOMContentLoaded", function () {
    function setupForm(formId, successMessageId) {
        const form = document.getElementById(formId);
        const successMessage = document.getElementById(successMessageId);

        if (!form) return; // If form is not found, exit

        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default submission

            const formData = new FormData(form);

            try {
                const response = await fetch("contact.php", {
                    method: "POST",
                    body: formData
                });

                const result = await response.text();

                if (result === "success") {
                    form.style.display = "none"; // Hide form
                    successMessage.style.display = "block"; // Show success message

                    // Redirect after 5 seconds
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 5000);
                } else if (result === "invalid-email") {
                    alert("Please enter a valid email address.");
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Error submitting form. Check your internet connection.");
            }
        });
    }

    // Initialize forms on both pages
    setupForm("contactForm", "successMessage"); // For contact.html
    setupForm("indexContactForm", "indexSuccessMessage"); // For index.html
});
