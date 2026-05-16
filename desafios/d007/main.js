const btn = document.querySelector('#btn-converter');
const resultado = document.querySelector('#resultado');
const dolar = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?');

btn.addEventListener('click', function () {
    iniciarConversao();
});

function iniciarConversao() {
    const reais = prompt('Quantos R$ você tem na carteira?');

    if (reais === null) return;

    const numero = reais.trim();

    if (numero === '') {
        alert('Por favor, digite um valor.');
        return;
    }

    const conversao = Number(numero.replace(',', '.'));

    if (Number.isNaN(conversao)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    const troca = conversao / dolar;

    resultado.innerHTML = `
        <h2>A partir de R$${conversao.toLocaleString('pt-BR')} reais, você poderá receber...</h2>
        <p>US$${troca.toLocaleString('en-US')} dólares </p>
    `;
}