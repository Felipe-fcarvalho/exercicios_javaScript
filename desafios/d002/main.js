const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    iniciar();
}) 

function iniciar() {
    const nome = prompt('Qual o seu nome?');
    if(!nome) return;

    alert(`Olá ${nome}! Quantos anos você tem?`)
    
    const idade = prompt('Qual a sua idade?');
    if(!idade) return;
    
    alert(`Acabei de conhecer o ${nome}, que tem ${idade} anos de idade!`);
}