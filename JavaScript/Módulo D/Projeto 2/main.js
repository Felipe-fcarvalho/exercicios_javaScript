function verificar() {
    let data = new Date
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Tente Novamente')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'imagens/bebeM.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/youngM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/man.jpg')
            } else {
                img.setAttribute('src', 'imagens/oldM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'imagens/bebeF.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/youngF.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/woman.jpg')
            } else {
                img.setAttribute('src', 'imagens/OldF.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

addEventListener('submit', function(e){
    e.preventDefault()
    verificar()
})