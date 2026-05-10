const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    validar()
})

function validar() {
    const res = document.getElementById('res')
    const ini = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const passo = document.getElementById('passo')
    if (ini.value.length == 0 || fim.value.length == 0 || Number(passo.value) <= 0) {
        res.innerHTML = 'Impossível contar'
        alert('[ERRO], escolha números válidos')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
    
    ini.value = ''
    fim.value = ''
    passo.value = ''
}

