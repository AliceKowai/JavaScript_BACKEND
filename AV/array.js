let meuArray = [1,2,3,4,5,6,7,8,9]

console.log(meuArray)

let novoArray = meuArray.slice()
console.log(novoArray)

//final do array
novoArray.pop() //excluir
novoArray.push() //adiciona
//inico
novoArray.unshift(10,40,34,32) //adicionar varios ou um
novoArray.shift() //exclue do inicio

console.table(novoArray)
console.table(meuArray)

for(meu in meuArray){
    console.log(meu)
}

for(meu of meuArray){
    console.log(meu)
}

