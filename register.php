<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "magazin_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $username = trim($_POST["username"]);
    $parola = trim($_POST["parola"]);

    $parola_hash = password_hash($parola, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO utilizatori (email, username, parola) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $username, $parola_hash);

    if ($stmt->execute()) {
        header("Location: /Lab1/index.php");
exit();
    } else {
        echo "Eroare: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>