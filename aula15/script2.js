let valores = [2, 6, 5, 9, 8, 4]
console.log(valores)
valores.sort()
console.log(`Em ordem crescente, fica assim ${valores} logo:`)
/*for(let pos = 0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores [pos]}`)
} */ //esse é o for antigo

for(let pos in valores){ //esse é o for mais novo, do ecma script, a leitura é 'para cada posição dentro de valores'//
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }