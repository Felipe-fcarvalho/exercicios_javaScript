form.addEventListener('submit', function (e) {
    e.preventDefault()
    validaTabuada()
})

const num = document.getElementById('num')
const tab = document.getElementById('seltab')

function validaTabuada() {
    if (num.value.length == 0) {
        alert('[ERRO], escolha um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Saber qual item foi selecionado no php
            tab.appendChild(item)
            c++
        }
        
    }
}
