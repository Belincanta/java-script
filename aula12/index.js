var idade = 66
console.log(`Você tem ${idade} anos de idade`)
if(idade < 16) {
    console.log('Não precisa votar') 
} else if(idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else if(idade >= 18) {
    console.log('Vote!')
}