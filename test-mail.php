<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$to = "inderpalsxndhu1@gmail.com"; // Change this
$subject = "Test Email from PHP";
$message = "This is a test email to check if mail() works.";
$headers = "From: test@dhillonprem.com";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ Mail function is working!";
} else {
    echo "❌ Mail function FAILED!";
}
?>
