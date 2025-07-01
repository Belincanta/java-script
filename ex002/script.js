function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[Erro] verifique o ano informado e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança//
                img.setAttribute('src','imagens/masculino1.png')
            }
                
            else if (idade <30) {
                //jovem//
                img.setAttribute('src','imagens/masculino2.png')
            }
               
            else if (idade <40) {
                //adulto//
                img.setAttribute('src','imagens/masculino3.png')
            }
                
            else{
                //idoso
                img.setAttribute('src','imagens/masculino4.png')
            }

        }   else if (fsex[1].checked) {
            genero = 'Mulher'    
            if (idade >=0 && idade <10) {
                //criança//
                img.setAttribute('src','imagens/feminino1.png')
            }
                
            else if (idade <30) {
                //jovem//
                img.setAttribute('src','imagens/feminino2.png')
            }
               
            else if (idade <40) {
                //adulto//
                img.setAttribute('src','imagens/feminino3.png')
            }
                
            else{
                //idoso
                img.setAttribute('src','imagens/feminino4.png')
            } 
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos que a pessoa é ${genero} e possui cerca de ${idade} anos!`
        res.appendChild(img)

    }
}