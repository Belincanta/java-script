let amigo = {nome: 'alessandro', //para criar um objeto, usa-se chaves, posso colocar diferentes parâmetros, além de numeros//
    idade: '28', 
    peso: 90.0,
    engordar(p=0) { //é possível adicionar uma função dentro de um objeto//
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)    
console.log(`O ${amigo.nome} engordou cerca de ${amigo.peso}kg`)