function tabuada() {
    var n = document.getElementById('txnum')
    var tab = document.getElementById('tabsel')
    if (n.value.length == 0)  {
        alert('Por favor, digite um número!')
    } else {
        var num = Number(n.value)
        var c = 0
        tab.innerHTML = '' //para limpar toda vez que alterar o número do botão//
        while(c <= 10) { //leitura = enquanto o valor de c for menor ou igual a dez vai criar um elemento chamado 'option' que é uma opção/linha dentro do select, ou seja, vai criar 10 opções//
            var item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}` //criado a variável 'item', com isso ele vai aparecer o texto, que no caso é uma multiplicação//
            tab.appendChild(item)
            c++ //para ir adicionando o próximo número//
        }
    }
    
  
    
}
