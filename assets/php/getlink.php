<?php
session_start();

@include "conection.php";

$iduser = $_SESSION['id-user'];

$sqllinks = "SELECT * FROM links WHERE usuario_id = $iduser";
$linkresult = $mysqli->query($sqllinks);

if ($linkresult) {
    $links = [];
    while ($row = $linkresult->fetch_assoc()) {
        array_push($links, $row);
    }
};

$sqlusuario = "SELECT * FROM usuario WHERE id = $iduser";
$usuarioresult = $mysqli->query($sqlusuario);

if ($usuarioresult && $usuarioresult->num_rows > 0) {
    $usuario = [];
    $row = $usuarioresult->fetch_assoc();
    if (!empty($row["foto"])) {
        $row["foto"] = base64_encode($row["foto"]);
    }
    array_push($usuario, $row);
};

echo json_encode(
    [
        "usuarios" => $usuario,
        "links" => $links
    ]
);
?>