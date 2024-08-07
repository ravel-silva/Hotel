// Função para carregar reservas do Local Storage e exibi-las na tabela
function carregarReservas() {
    // Recuperar reservas do Local Storage
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const tbody = document.getElementById('reservas-body');

    // Limpar o tbody existente
    tbody.innerHTML = '';

    // Iterar sobre as reservas e criar linhas na tabela
    reservas.forEach(reserva => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${reserva.status || ''}</td>
            <td>${reserva.reserva || ''}</td>
            <td>${reserva.nome || ''}</td>
            <td>${reserva["data-entrada"] || ''}</td>
            <td>${reserva["data-saida"] || ''}</td>
            <td>${reserva["numero-quarto"] || ''}</td>
            <td>${reserva["t-quarto"] || ''}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Chamar carregarReservas ao carregar a página
document.addEventListener('DOMContentLoaded', carregarReservas);
