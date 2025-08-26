<?php
@include "conection.php";

$iduser = 1;

$sql = "SELECT * FROM links WHERE usuario_id = $iduser";

$result = $mysqli->query($sql);

if ($result) {
    $arr = [];
    while ($row = $result->fetch_assoc()) {
        array_push($arr, $row);
    }
    echo json_encode($arr);
} else {
    echo "Erro na coleta dos dados";
}

?>