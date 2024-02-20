const numerosPares = [2,4,6,8,10]
const numerosImpares = [1,3,5,7,9]

const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros);
const [num1, num2, ...outrosNumeros] = [1,2, 3,4,5]
console.log(num1,num2, outrosNumeros);

console.log('************************');

const pessoa ={
    nome: 'Floki',
    idade: 2
}

const pessoaComTelefone = {...pessoa, telefone:72999353797}
const nome1 = pessoa.nome
const {nome} = pessoa
console.log(nome, nome1)

function imprimirDados({nome, idade}) {
    console.log(nome, idade)
}

imprimirDados(pessoa)