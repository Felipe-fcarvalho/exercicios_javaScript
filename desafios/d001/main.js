const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function() {
    mostrarMensagem(btn1, 'Você clicou no 1º botão')
});

btn2.addEventListener('click', function() {
    mostrarMensagem(btn2, 'Você clicou no 2º botão')
});

btn3.addEventListener('click', function() {
    mostrarMensagem(btn3, 'Você clicou no 3º botão')
});

function mostrarMensagem(botao, mensagem) {
    alert(mensagem);
    botao.classList.toggle('ativo')
}