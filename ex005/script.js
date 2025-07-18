let num = document.getElementById('txnum') //variável para o input de número//
let lista = document.getElementById('analtab')//variável para o select//
let res = document.getElementById('res')//variável para trazer o resultado na div//
let valores = []//variável de vetor//

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //se o número estiver entre 1 e 100 é verdadeiro//
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) { //se o número na lista for diferente de -1, ou seja, se encontrar o valor na lista retorna verdadeiro//
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)) { //se é um número ou se não está na lista//
        valores.push(Number(num.value))
        let item = document.createElement('option')//serve para criar uma linha/opção dentro do select//
        item.text = ` O valor ${num.value} foi adicionado!`
        lista.appendChild(item) //serve para criar uma linha/opção dentro do select//
        res.innerHTML = ''//serve para limpar a análise, se um novo numero for adicionado//
    } else {
        alert('Valor inválido ou já encontrado na lista') //se for falso//
    }
      num.value = '' //deixar em branco depois de adicionado um número//
      num.focus()//serve para deixar o cursor no mouse na posição definida//
}

function analisar() { //função para o botão de analisar//
    if(valores.length == 0){ //se a contagem de valores for 0//
        alert('Antes, você deve adicionar um número!')
    } else {
        let tot = valores.length //vai contar a quantidade de linhas/valores//
        let maior = valores[0] //variável para pegar o primeiro valor do vetor, podendo ser chamada de maior//
        let menor = valores[0]//variável para pegar o primeiro valor do vetor, podendo ser chamada de menor//
        let soma = 0 //variável para somar os valores, começando por 0//
        let media = 0//variável para tirar a média dos valores, começando por 0//
        for( let pos in valores) {
            soma += valores[pos] //somar todos os valores//
            if(valores[pos] > maior) //se o valor da posição 0 chamado de pos, for maior, a variável maior vai recebê-lo, assim para os posteriores, posição 1, 2...//
                maior = valores[pos]
            if(valores[pos] < menor) //se o valor da posição 0 chamado de pos, for menor, a variável menor vai recebê-lo, assim para os posteriores, posição 1, 2...//
                menor = valores[pos]
        }
        media = soma / tot //para saber a média//
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados!</p>`
        res.innerHTML += `<p> O valor maior é o número ${maior}!</p>`
        res.innerHTML += `<p> O valor menor é o número ${menor}!</p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}! </p>`
        res.innerHTML += `<p> A média dos valores é ${media}! </p>`
    }
}
