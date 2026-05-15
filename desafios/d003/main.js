const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    iniciar();
})  

function iniciar() {
    const entrada = prompt('Digite um número inteiro qualquer');
    
    if(entrada === null) return;

    if (entrada.trim() === '') {
        alert('Você precisa digitar algum valor.');
        return;
    }
    
    const valor = Number(entrada);

    if (Number.isNaN(valor)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    if(!Number.isInteger(valor)) {
        alert('Por favor, digite um número inteiro.');
        return;
    }

    alert(`Antes de ${valor}, temos o número ${valor - 1}. Depois de ${valor}, temos o número ${valor + 1}.`)
}   