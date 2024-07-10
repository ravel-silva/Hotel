function login(event) {
    event.preventDefault(); // Impede o formulário de ser enviado automaticamente

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Substitua estas credenciais de exemplo pelas credenciais reais
    var credenciaisCorretas = {
        usuario: 'admin',
        senha: '1234'
    };

    if (usuario === credenciaisCorretas.usuario && senha === credenciaisCorretas.senha) {
        alert('Login bem-sucedido!');
        window.location.href = './src/pages/check-in/check-in.html'
        // Aqui você pode redirecionar para outra página ou executar qualquer outra ação necessária
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}