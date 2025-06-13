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

      // Dias vazios antes do primeiro dia
      for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
      }

      for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
          calendarBody.appendChild(row);
          row = document.createElement("tr");
        }

        const td = document.createElement("td");
        td.textContent = day;

        // Simulação: marca domingos como ocupados
        const dayOfWeek = (firstDay + day - 1) % 7;
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          td.classList.add("occupied");
        }
        row.appendChild(td);
      }
      calendarBody.appendChild(row);
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