const btn = document.querySelector('#btn');
const res = document.querySelector('#resultado')

btn.addEventListener('click', function(){
    iniciar();
})

function iniciar() {
    const a = Number(prompt('Qual é o valor de a?'));
    
    if(a === '') {
        alert('Digite um número, por favor.');
        return
    }
    
    if(Number.isNaN(a)) {
        alert('Informe um número válido.');
        return;
    }

    const b = Number(prompt(`Qual é o valor de b?`));
    
    if(b === '') {
        alert('Digite um número, por favor.');
        return
    }

    if(Number.isNaN(b)) {
        alert('Informe um número válido.');
        return;
    }

    const c = Number(prompt(`Qual é o valor de c?`));
    
    if(c === '') {
        alert('Digite um número, por favor.');
        return
    }

    if(Number.isNaN(c)) {
        alert('Informe um número válido.');
        return;
    }

    const resultado = (b * b) - (4 * a * c);

    res.innerHTML = `
    <h2>Resolvendo Bhaskara</h2>
    <p>A equação atual é ${a}x² + ${b}x + ${c} = 0.</p>
    <p>O cálculo realizado será ∆ = ${b}² - 4 . ${a} . ${c}</p>
    <p>O valor calculado foi <mark>∆ = ${resultado}</mark></p>
    `
}