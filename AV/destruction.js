const pessoa = {
    nome: 'Alice',
    sobrenome: 'Costa',
    idade: 29,
}

//forma convencional
console.log(pessoa.sobrenome);

let {sobrenome} = pessoa
console.log(sobrenome)

let {nome: nomeDaAlice} = pessoa
console.log(nomeDaAlice)

let nomes = ['Alice', 'Francisco', 'Felipe', 'Micael']
//forma convencional
let nomeFransico = nomes[1]
console.log(nomeFransico)
//destruction 
let [nomeAlice, nomeFrancisco] = nomes //sem indice
let {0:nomeAlice1, 1:nomeFrancisco1} = nomes //com indice