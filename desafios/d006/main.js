const btn = document.querySelector('#btn-converter');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', function () {
    iniciarConversao();
});

function iniciarConversao() {
    const entrada = prompt('Digite uma temperatura em °C (Celcius)');

    if (entrada === null) return;

    const numero = entrada.trim();

    if (numero === '') {
        alert('Por favor, digite um valor.');
        return;
    }

    const temperatura = Number(numero.replace(',', '.'));

    if (Number.isNaN(temperatura)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    const kelvin = temperatura + 273.15;
    const fahrenheit = (temperatura * 1.8) + 32 ;

    resultado.innerHTML = `
        <h2>A temperatura de ${temperatura.toLocaleString('pt-BR')}°C, corresponde a...</h2>
        <p>${kelvin.toLocaleString('pt-BR')}°K (Kelvin)</p>
        <p>${fahrenheit.toLocaleString('pt-BR')}°F (Fahrenheit)</p>
    `;
}