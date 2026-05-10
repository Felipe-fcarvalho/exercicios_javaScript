/*
Resolução do guanabara

let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

*/

const num = document.getElementById('num')
const res = document.getElementById('res')
const lista = document.getElementById('lista')
const btnAdd = document.getElementById('add')
const btnDone = document.getElementById('done')
const valores = []

btnAdd.addEventListener('click', function() {
    const numero = Number(num.value)
    
    if (num.value.length === 0 || numero < 1 || numero > 100) {
        alert('Erro, escolha um número válido')
        num.focus()
        return
    }
    
    if (valores.includes(numero)){
        alert('Esse número já foi adicionado')
        num.value = ''
        num.focus()
        return
    }
    
    valores.push(numero) 
    
    const item = document.createElement('option')
    item.text = `Valor ${numero} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
    lista.hidden = false
    
    num.value = ''
    num.focus()
    
})

btnDone.addEventListener('click', function (){
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar')
        return
    }
    
    const total = valores.length
    const maior = Math.max(...valores)
    const menor = Math.min(...valores)
    const soma = valores.reduce((acc, n) => acc + n, 0)
    const media = (soma / total).toFixed(2)
    
    res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>
    <p>O maior valor informado é ${maior} </p>
    <p>O menor valor informado é ${menor} </p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é de ${media} </p>`
})

