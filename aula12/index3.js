//uso de switch para mais de uma resposta//

var agora = new Date()
var diasemana = agora.getDay()

//usando o getDay, o dia da semana 0 começa no domingo//

//o uso do break após cada resposta é essencial, pois se achar a validação e não tiver o break, vai pegar todas as respontas que vierem a seguir//
switch(diasemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Data inválida')
}