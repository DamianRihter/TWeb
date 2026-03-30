<?php
session_start();
session_unset();
session_destroy();

header("Location: /Lab1/index.php");
exit();
?>