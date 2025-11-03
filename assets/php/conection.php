<?php

$host = "localhost";
$usuario = "root";
$senha = "Fd08131028!";
$banco = "linktree";

$mysqli = new mysqli($host, $usuario, $senha, $banco);

$mysqli->set_charset("utf8");

if ($mysqli->connect_errno) {
    echo "Erro de conexão, tente novamente!";
    exit();
}

return;
?>