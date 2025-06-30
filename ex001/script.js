function carregar() {
    var msg = document.getElementById('msg') //criado uma variável para o texto//
    var img = document.getElementById('imagem') //criado uma variável para a imagem//
    var data = new Date() //criado uma variável para a data atual do computador//
    var hora = data.getHours() //criado uma variável na data atual, ver as horas//
   
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
        document.body.style.background = '#D9BA82'
        img.src = 'fotomanha.png'
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
        document.body.style.background = '#F28729'
        img.src = 'fototarde.png'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
        document.body.style.background = '#0C2C40'
        img.src = 'fotonoite.png'
    }

}
