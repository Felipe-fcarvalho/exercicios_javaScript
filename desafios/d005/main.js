const btn = document.querySelector('#btn-converter');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', function () {
    iniciarConversao();
});

function iniciarConversao() {
    const entrada = prompt('Digite uma distância em metros (m)');

    if (entrada === null) return;

    const texto = entrada.trim();

    if (texto === '') {
        alert('Por favor, digite um valor.');
        return;
    }

    const metros = Number(texto.replace(',', '.'));

    if (Number.isNaN(metros)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    const km = metros / 1000;
    const hm = metros / 100;
    const dam = metros / 10;
    const dm = metros * 10;
    const cm = metros * 100;
    const mm = metros * 1000;

    resultado.innerHTML = `
        <h2>A distância de ${metros.toLocaleString('pt-BR')} metros, corresponde a...</h2>
        <p>${km.toLocaleString('pt-BR')} quilômetros (Km)</p>
        <p>${hm.toLocaleString('pt-BR')} hectômetros (Hm)</p>
        <p>${dam.toLocaleString('pt-BR')} decâmetros (Dam)</p>
        <p>${dm.toLocaleString('pt-BR')} decímetros (dm)</p>
        <p>${cm.toLocaleString('pt-BR')} centímetros (cm)</p>
        <p>${mm.toLocaleString('pt-BR')} milímetros (mm)</p>
    `;
}