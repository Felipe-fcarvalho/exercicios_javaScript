const btn = document.querySelector('#btn');
const res = document.querySelector('#resultado')

btn.addEventListener('click', function(){
    iniciar();
})

function iniciar() {
    const nome = prompt('Qual é o nome do funcionário?');
    
    if(nome === '') {
        alert('Digite o nome, por favor.');
        return
    }

    const salario = Number(prompt(`Qual é o salário do ${nome}?`));

    if(Number.isNaN(salario)) {
        alert('Informe o salario');
        return
    } else if (salario < 0) {
    alert('O valor do salario não pode ser negativo.');
    return;
    }

    const porcentagem = prompt(`O salário de ${nome} será reajustado em qual porcentagem?`)

    if(Number.isNaN(porcentagem)) {
        alert('Digite a porcentgem');
        return 
    } else if (porcentagem < 0){
        alert('O valor do salario não pode ser negativo.');
    return;
    }

    const reajuste = (salario * porcentagem) / 100;
    const total = salario + reajuste;

    res.innerHTML = `
    <h2>${nome} recebeu um reajuste salarial!</h2>
    <p>O salário atual era de R$${salario.toFixed(2)}.</p>
    <p>Com o aumento de R$${porcentagem}% o salário vai aumentar R$${reajuste.toFixed(2)} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$${total.toFixed(2)}.</p>
    `
}