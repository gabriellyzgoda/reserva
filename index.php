<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calendário de Reservas</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <div class="header">Faça sua reserva</div>
  <div class="calendar-container">
    <div class="calendar-nav">
      <button id="prevMonth">&#8592;</button>
      <h2 id="monthYear"></h2>
      <button id="nextMonth">&#8594;</button>
    </div>
    <table class="calendar">
      <thead>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody id="calendarBody">
      </tbody>
    </table>
    <div class="legend">
      <div><span class="occupied"></span> ocupado</div>
      <div><span class="free"></span> livre</div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>