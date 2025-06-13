<?php
$pdo = new PDO("mysql:host=localhost;dbname=reserva", "usuario", "");

$data = $_POST['data'];
$nome = $_POST['nome'];
$horario = $_POST['horario'];
$quantidade = $_POST['quantidade'];

$sql = "INSERT INTO reservas (nome, data, horario, quantidade) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$nome, $data, $horario, $quantidade]);

echo "ok";
?>
