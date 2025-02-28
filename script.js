document.addEventListener("DOMContentLoaded", function () {
    const encodedURL = "aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi9tZ3ZvZ3Zsdw=="; // Replace with your Base64 encoded Formspree URL
    const decodedURL = atob(encodedURL); // Decode the URL

    function setupForm(formId, successMessageId) {
        const form = document.getElementById(formId);
        const successMessage = document.getElementById(successMessageId);

        if (!form) return; // If the form doesn't exist on this page, exit

        form.setAttribute("action", decodedURL); // Set the Formspree action dynamically

        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default submission

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    form.style.display = "none"; // Hide form
                    successMessage.style.display = "block"; // Show success message

                    // Redirect after 5 seconds
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 5000);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Error submitting form. Check your internet connection.");
            }
        });
    }

    // Setup forms on both pages
    setupForm("contactForm", "successMessage"); // For contact.html
    setupForm("indexContactForm", "indexSuccessMessage"); // For index.html
});
