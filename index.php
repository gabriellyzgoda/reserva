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
<div id="modal" class="modal" role="dialog" aria-modal="true">
  <div id="listaReservas" style="margin-top: 10px; background: white; color: black; padding: 10px; border-radius: 8px;"></div>
  <div class="modal-content">
    <button onclick="closeModal()" style="float:right;">X</button>
    <h2>Escolha seu horário</h2>
    <form id="formReserva">
      <label>Horário:
        <input type="time" name="horario" required>
      </label><br>
      <label>Quantidade de pessoas:
        <input type="number" name="quantidade" min="1" required>
      </label><br>
      <label>Nome:
        <input type="text" name="nome" required>
      </label><br>
      <input type="hidden" name="data" id="dataEscolhida">
      <button type="submit">Fazer reserva</button>
    </form>
  </div>
</div>

  <script src="script.js"></script>
</body>
</html>