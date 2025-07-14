let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)

let pos = num.indexOf(8) //serve para buscar o valor do vetor, trazendo sua posição, quando não tem o valor, retorna -1//
if(pos == -1){
    console.log('O número digitado não existe, logo não tem posição!')
} else{
    console.log(`O valor está na posição ${pos}`)
}
