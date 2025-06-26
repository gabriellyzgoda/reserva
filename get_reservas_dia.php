<?php
$pdo = new PDO("mysql:host=localhost;dbname=reserva", "root", ""); // ajuste se necessário

$data = $_GET['data'];

$stmt = $pdo->prepare("SELECT nome, horario, quantidade FROM reservas WHERE data = ?");
$stmt->execute([$data]);

$reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reservas);