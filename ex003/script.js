//chamar a função ao cliclar no botão//
function contar() { 
    var inicio = document.getElementById('txinicio') //variável para o primeiro botão//
    var fim = document.getElementById('txfim') //variável para o segundo botão//
    var passo = document.getElementById('txpasso') //variável para o botão que vai pular a contagem//
    var resultado = document.getElementById('res') //variável para trazer o resultado//

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Selecione os valores novamente...'
        alert('[Erro], os valores estão incorretos') //se um dos meus valores receber 0, vai dar esse alerta, caso contrário continua...//
        
    } else {
        resultado.innerHTML='Contando:<br>'
        var i = Number(inicio.value) //variável para pegar o valor da variável inicio//
        var f = Number(fim.value) //variável para pegar o valor da variável fim//
        var p = Number(passo.value) //variável para pegar o valor da variável passo//

        if (p <= 0) { //se informado o passo 0 ou negativo, vai dar uma mensagem de erro, e já considerar na contagem o passo 1//
            alert('Passo inválido! Será considerado o PASSO 1')
            p = 1
        }

        if (i < f) { //se o valor de 'i' for menor que o valor de 'f'...//
            for(var c = i; c <= f; c += p) { //uso do for, crio uma variável, se o valor de inicio for menor ou igual ao valor final, vai concatenar o valor do passo 'p', dando a impressão de contagem//
            resultado.innerHTML += ` ${c} \u{1F449}` //vou concatenar o texto que já existia com o resultado, e no final de cada número um emotion//
            }               
        } else { //se a condição de cima for falsa, vai cair na seguinte...
            for(var c = i; c >= f; c -= p) { //se meu valor inicial for maior ou igual ao valor final, eu subtraio o valor do passo 'p'//
                resultado.innerHTML += ` ${c} \u{1F449}`//vou concatenar o texto que já existia com o resultado, e no fianl de cada número um emotion//
            }                
        }
        resultado.innerHTML += `\u{1F3C1}`//no final de cada contagem, vai acionar esse emotion//

       
    }   
}
 