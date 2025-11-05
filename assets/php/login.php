<?php
session_start();

@include "conection.php";

$nome = $_POST['nome'] ?? '';
$senha = $_POST['senha'] ?? '';

if(!empty($nome) && !empty($senha)){
    
$sqllogin = "SELECT * FROM usuario WHERE nome = '$nome' AND senha = '$senha'";

$resultlogin = $mysqli->query($sqllogin);

    if ($resultlogin && $resultlogin->num_rows > 0) {
        $dadosuser = mysqli_fetch_assoc($resultlogin);

        $_SESSION['id-user'] = $dadosuser['id'];
        $_SESSION['nome-user'] = $dadosuser['nome'];

        echo json_encode(["correto" => true]);
    } else {
        echo json_encode([
            "error" => "Usuário ou senha inválido"
        ]);
    }
} else{
    echo json_encode([
        "error" => "Por favor, preencha todos os campos"
    ]);
};

?>
