function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function formatarPorcentagem(valor) {
  return valor.toFixed(2).replace('.', ',') + '%';
}

function solicitarPreco(mensagem) {
  while (true) {
    const entrada = prompt(mensagem);

    if (entrada === null) return null;

    const valor = parseFloat(entrada.replace(',', '.'));

    if (!isNaN(valor) && valor > 0) {
      return valor;
    }

    alert('Por favor, informe um valor numérico válido e maior que zero.');
  }
}

function analisarPrecos(precoAnterior, precoAtual) {
  const diferenca      = Math.abs(precoAtual - precoAnterior);
  const percentual     = (diferenca / precoAnterior) * 100;
  const precoSubiu     = precoAtual > precoAnterior;
  const precoIgual     = precoAtual === precoAnterior;

  return { diferenca, percentual, precoSubiu, precoIgual };
}

function exibirResultado(precoAnterior, precoAtual) {
  const { diferenca, percentual, precoSubiu, precoIgual } = analisarPrecos(precoAnterior, precoAtual);

  const resultado = document.getElementById('resultado');
  const msgInicial = document.getElementById('msgInicial');

  msgInicial.style.display = 'none';

  resultado.innerHTML = '';

  let msgComparacao, msgDiferenca, msgVariacao;

  if (precoIgual) {
    msgComparacao = 'O preço não mudou.';
    msgDiferenca  = 'Não houve variação de valor.';
    msgVariacao   = 'Uma variação de 0% — preço estável.';
  } else if (precoSubiu) {
    msgComparacao = 'Hoje o produto está mais caro.';
    msgDiferenca  = `O preço subiu ${formatarMoeda(diferenca)} em relação ao preço anterior.`;
    msgVariacao   = `Uma variação de ${formatarPorcentagem(percentual)} pra cima.`;
  } else {
    msgComparacao = 'Hoje o produto está mais barato.';
    msgDiferenca  = `O preço caiu ${formatarMoeda(diferenca)} em relação ao preço anterior.`;
    msgVariacao   = `Uma variação de ${formatarPorcentagem(percentual)} pra baixo.`;
  }

  resultado.innerHTML = `
    <h2>Analisando os valores informados</h2>
    <p>O produto custava ${formatarMoeda(precoAnterior)} e agora custa ${formatarMoeda(precoAtual)}.</p>
    <p>${msgComparacao}</p>
    <p>${msgDiferenca}</p>
    <p>${msgVariacao}</p>
  `;

  resultado.classList.add('visivel');
}

document.getElementById('btnVerificar').addEventListener('click', function () {

  const precoAnterior = solicitarPreco('Qual era o preço anterior do produto?');
  if (precoAnterior === null) return;

  const precoAtual = solicitarPreco('Qual é o preço atual do produto?');
  if (precoAtual === null) return;

  exibirResultado(precoAnterior, precoAtual);
});
