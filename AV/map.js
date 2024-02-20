//map é um metodo que tem uma função interna que intera cada elemento de um array ou objeto.

const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10]

const tabuadaDeSeis = listaDeNumeros.map((item)=>{
    return item * 6
})
const tabuadaDeSete = listaDeNumeros.map((item)=>{
    return item * 7
})
const somaIndice = listaDeNumeros.map((item,i)=>{
    return item + i
})

console.table(tabuadaDeSeis)
console.table(tabuadaDeSete)
console.table(somaIndice)

const encontrarNumero = listaDeNumeros.find((item)=>{
    return item ===7
})

console.log('encontrei, parei',encontrarNumero);

const somaArray = listaDeNumeros.reduce((total, proximoValor)=>{
    return total * proximoValor
})

console.log(somaArray)