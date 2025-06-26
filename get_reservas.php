<?php
$pdo = new PDO("mysql:host=localhost;dbname=reserva", "root", ""); // ajuste usuário/senha se necessário

$mes = $_GET['mes'];
$ano = $_GET['ano'];

$stmt = $pdo->prepare("SELECT nome, data, horario FROM reservas WHERE MONTH(data) = ? AND YEAR(data) = ?");
$stmt->execute([$mes, $ano]);

$reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reservas);
