


// Função para salvar uma nova reserva no Local Storage
function salvarNovaReserva(novaReserva) {
  // Recuperar reservas existentes ou inicializar uma lista vazia
  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  // Adicionar a nova reserva à lista de reservas
  reservas.push(novaReserva);

  // Armazenar a lista atualizada de reservas no Local Storage
  localStorage.setItem("reservas", JSON.stringify(reservas));
}

// Função para tratar o envio do formulário de check-in
function checkIn(event) {
  event.preventDefault();

  // Obter o formulário e criar um objeto FormData
  const form = document.getElementById("cadastro-check-in");
  const formData = new FormData(form); //captura automaticamente todos os campos do formulário e seus valores.
  const novaReserva = {};

  const nome = formData.get("nome");
  const cpf = formData.get("cpf");
  const tipoQuarto = formData.get("t-quarto");
  const numeroQuarto = formData.get("numero-quarto");
  const entrada = formData.get("data-entrada");
// Verifica se os campos estão vazios
  if (!nome || !cpf || !tipoQuarto || !numeroQuarto || !entrada) {
    alert("Por favor, preencha os campos obrigatórios.");
    return;
  }
  // Preencher o objeto novaReserva com os dados do formulário
  formData.forEach((value, key) => {
    novaReserva[key] = value;
  });

  // Salvar a nova reserva
  salvarNovaReserva(novaReserva);

  console.log("Nova reserva salva:", novaReserva);
}
