<?php
session_start();

@include "conection.php";

$nome = $_POST['nome'] ?? '';
$senha = $_POST['senha'] ?? '';

$sqllogin = "SELECT * FROM usuario WHERE nome = '$nome' AND senha = '$senha'";

$resultlogin = $mysqli->query($sqllogin);

$dadosuser = mysqli_fetch_assoc($resultlogin);

$_SESSION['id-user'] = $dadosuser['id'];
$_SESSION['nome-user'] = $dadosuser['nome'];

header("Location: ../../profile.html");
exit();

?>