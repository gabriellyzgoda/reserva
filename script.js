const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  document.getElementById("monthYear").textContent = `${monthNames[month]} ${year}`;

  const calendarBody = document.getElementById("calendarBody");
  calendarBody.innerHTML = "";

  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }

    const td = document.createElement("td");
    td.textContent = day; // Exibe o número do dia
    td.setAttribute('data-dia', day);

    // Evento para abrir o modal
    td.addEventListener("click", () => {
      const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      openModal(dayStr);
    });

    row.appendChild(td);
  }

  calendarBody.appendChild(row);

  // Chama a função de carregar reservas com os valores corretos
  loadReservas(month, year);
}

function loadReservas(month, year) {
  fetch(`get_reservas.php?mes=${month + 1}&ano=${year}`)
    .then(res => res.json())
    .then(reservas => {
      reservas.forEach(reserva => {
        const data = new Date(reserva.data);
        if (data.getMonth() === month && data.getFullYear() === year) {
          const dia = data.getDate();
          const cell = document.querySelector(`td[data-dia='${dia}']`);

          if (cell) {
            cell.classList.add("occupied");

            // Cria um elemento de exibição
            const div = document.createElement("div");
            div.style.fontSize = "10px";
            div.style.marginTop = "2px";
            div.style.background = "#ffffff44";
            div.style.borderRadius = "4px";
            div.textContent = `${reserva.horario.substr(0,5)} - ${reserva.nome}`;
            cell.appendChild(div);
          }
        }
      });
    });
}


document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);

// Envio do formulário
document.getElementById("formReserva").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("reservar.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(response => {
    alert("Reserva feita com sucesso!");
    closeModal();
    renderCalendar(currentDate); // Atualiza o calendário após reserva
  });
});

function openModal(date) {
  document.getElementById("dataEscolhida").value = date;
  document.getElementById("modal").style.display = "flex";

  // Buscar reservas do dia clicado
  fetch(`get_reservas_dia.php?data=${date}`)
    .then(res => res.json())
    .then(reservas => {
      const lista = reservas.map(r => `• ${r.nome} às ${r.horario} (${r.quantidade} pessoa(s))`).join('<br>');
      document.getElementById("listaReservas").innerHTML = reservas.length ? lista : "Nenhuma reserva para este dia.";
    });
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}
