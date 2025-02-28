<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "inderpalsxndhu1@gmail.com"; // Change this to your email
    $subject = "New Contact Form Submission";
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    // Validate Email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid-email";
        exit;
    }

    // Email Headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send Email
    if (mail($to, $subject, $message, $headers)) {
        echo "success"; // Response for JavaScript
    } else {
        echo "error"; // Response for JavaScript
    }
}
?>
