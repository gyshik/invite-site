<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $vote = $_POST['vote'];

    $to = "nakypbekovn@gmail.com";
    $subject = "New Vote Received";
    $message = "Vote: " . $vote;

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the form page or display a thank you message
    header('Location: index.html');
    exit();
}
?>
