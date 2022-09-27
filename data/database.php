<?php
$db = new PDO('mysql:host=localhost; database=financiera', 'cursos', '$123456');
if(!$db){
    echo "Error al conectar la base de datos";
    exit;
}
?>