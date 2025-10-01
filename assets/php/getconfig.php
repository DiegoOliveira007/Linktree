<?php
@include "conection.php";

$iduser = 1;

$sqlconfig = "SELECT * FROM configuracao WHERE usuario_id = $iduser";

$configresult = $mysqli->query($sqlconfig);

if ($configresult) {
    $configuser = [];
    while ($row = $configresult->fetch_assoc()) {
        array_push($configuser, $row);
    }
    echo json_encode($configuser);
} else {
    echo "Erro na coleta dos dados";
}

?>