//spread - é uma sintaze que permite espelhamento de objetos iteraveis
let meuArray = [1,2,3,4]
let novoArray = [...meuArray, 5,6,7,8,9]
console.log(novoArray)

let meuObjeto ={
    nome: 'Alice',
    idade: 29,
    profissão: 'Programadora'
}

let novoObjeto ={
    ...meuObjeto,
    filhos: 0,
    animais: 10,
    casa: 'Aluguel'
}

console.log(novoObjeto);

const cadastroDePets = (info) => {
    let novosDados ={
        ...info,
        tipoRação: 'Canina',
        enfermidade: 'Não',
    }
    return novosDados
}

console.log(cadastroDePets({nome:'Uni', raça:'pinsher',idade:9}));

