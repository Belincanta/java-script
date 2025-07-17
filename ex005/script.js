let num = document.getElementById('txnum')
let lista = document.getElementById('analtab')
let res = document.getElementById('res')
let valores = []

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
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    
  
    
}
