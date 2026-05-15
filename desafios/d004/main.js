const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    iniciar();
});

function pedirTexto(mensagem, mensagemErro) {
    const valor = prompt(mensagem);

    if (valor === null) return null;

    if (valor.trim() === '') {
        alert(mensagemErro);
        return null;
    }

    return valor.trim();
}

function pedirNumero(mensagem, mensagemErro) {
    const valor = prompt(mensagem);

    if (valor === null) return null;

    if (valor.trim() === '') {
        alert(mensagemErro);
        return null;
    }

    const numero = Number(valor.replace(',', '.'));

    if (Number.isNaN(numero)) {
        alert('Por favor, digite um número válido.');
        return null;
    }

    return numero;
}

function iniciar() {
    const produto = pedirTexto(
        'Que produto você está comprando?',
        'Você precisa escolher algum produto.'
    );

    if (produto === null) return;

    const valorProduto = pedirNumero(
        `Quanto custa ${produto} que você está comprando?`,
        'Você precisa informar o valor do produto.'
    );

    if (valorProduto === null) return;
    if (valorProduto < 0) {
    alert('O valor do produto não pode ser negativo.');
    return;
    }

    const pagamento = pedirNumero(
        `Qual foi o valor que você deu para pagar ${produto}?`,
        'Você precisa informar o valor do pagamento.'
    );

    if (pagamento === null) return;
    if (pagamento < 0) {
    alert('O valor do pagamento não pode ser negativo.');
    return;
}

    const troco = pagamento - valorProduto;

    if (pagamento < valorProduto) {
    alert('O valor pago é insuficiente para a compra.');
    return;
}

    alert(
        `Você comprou ${produto}, que custou R$ ${valorProduto.toFixed(2)}. ` +
        `Deu R$ ${pagamento.toFixed(2)} em dinheiro e vai receber R$ ${troco.toFixed(2)} de troco.`
    );
} 