const btn = document.querySelector('#btn');
const res = document.querySelector('#resultado');

btn.addEventListener('click', function () {
    iniciar();
});

function iniciar() {
    const entrada = prompt('Qual é o ano que você quer verificar?');

    if (entrada === null) return;

    const texto = entrada.trim();

    if (texto === '') {
        alert('Digite o ano, por favor.');
        return;
    }

    const ano = Number(texto);

    if (Number.isNaN(ano)) {
        alert('Informe um ano válido.');
        return;
    }

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`;

    if (Bissexto(ano)) {
        res.innerHTML += `<p>O ano de ${ano} <span class="bissexto">É BISSEXTO ✅</span></p>`;
    } else {
        res.innerHTML += `<p>O ano de ${ano} <span class="não-bissexto">NÃO É BISSEXTO ❌</span></p>`;
    }
}

function Bissexto(ano) {
    if (ano % 400 === 0) {
        return true;
    } 
    
    if (ano % 100 === 0) {
        return false;
    } 
    
    return ano % 4 === 0;
}
