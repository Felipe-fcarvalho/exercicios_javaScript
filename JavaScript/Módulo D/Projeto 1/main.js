function carregar() {
    let img = document.getElementById('imagem')
    let txt = document.getElementById('txt')

    let agora = new Date()
    let hora = agora.getHours()
    //let hora = 15
    txt.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.style.backgroundImage = 'url("imagens/manhã.jpg")'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = 'url("imagens/tarde.jpg")'
        document.body.style.background = '#b9846f'
    } else {
        img.style.backgroundImage = 'url("imagens/noite.jpg")'
        document.body.style.background = '#515154'
    }
}

// ── configuração dos períodos do dia ──────────────────────────
// cada objeto define um período: início, fundo da página, imagem
/*const periodos = [
    {
        nome:       'manhã',
        horaInicio: 0,
        horaFim:    12,
        background: '#e2cd9f',
        imagem:     'imagens/manhã.jpg'
    },
    {
        nome:       'tarde',
        horaInicio: 12,
        horaFim:    18,
        background: '#b9846f',
        imagem:     'imagens/tarde.jpg'
    },
    {
        nome:       'noite',
        horaInicio: 18,
        horaFim:    24,
        background: '#515154',
        imagem:     'imagens/noite.jpg'
    }
];

// ── função que retorna o período atual ────────────────────────
function getPeriodo(hora) {
    return periodos.find(p => hora >= p.horaInicio && hora < p.horaFim);
}

// ── função principal ──────────────────────────────────────────
function carregar() {
    const hora = new Date().getHours();
    // para testar um horário específico, troque a linha acima por:
    // const hora = 22;

    const periodo = getPeriodo(hora);
    const imgEl   = document.getElementById('imagem');
    const txtEl   = document.getElementById('txt');

    // atualiza o texto
    txtEl.innerHTML = `Agora são ${hora}h — boa ${periodo.nome}!`;

    // ✅ atualiza a imagem da div corretamente
    imgEl.style.backgroundImage = `url("${periodo.imagem}")`;

    // atualiza o fundo da página
    document.body.style.backgroundColor = periodo.background;
}*/
