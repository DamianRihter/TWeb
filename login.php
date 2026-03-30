<?php
session_start();

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
    $parola = trim($_POST["parola"]);

    $stmt = $conn->prepare("SELECT id, username, parola FROM utilizatori WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $userData = $result->fetch_assoc();

        if (password_verify($parola, $userData["parola"])) {
            $_SESSION["user_id"] = $userData["id"];
            $_SESSION["username"] = $userData["username"];

            header("Location: /Lab1/index.php");
            exit();
        } else {
            echo "Parolă greșită!";
        }
    } else {
        echo "Utilizatorul nu există!";
    }

    $stmt->close();
}

$conn->close();
?>