<?php
$pdo = new PDO("mysql:host=localhost;dbname=reserva", "usuario", "");

$mes = $_GET['mes'];
$ano = $_GET['ano'];

$stmt = $pdo->prepare("SELECT DISTINCT DAY(data) as dia FROM reservas WHERE MONTH(data) = ? AND YEAR(data) = ?");
$stmt->execute([$mes, $ano]);

echo json_encode($stmt->fetchAll(PDO::FETCH_COLUMN));
?>
