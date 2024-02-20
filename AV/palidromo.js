const prompt = require('prompt-sync')()
const palavra = prompt('Digite uma palavra:')

function verificaPalidromo(palavra){
    palidromo = palavra.split("").reverse().join("");
    if(palidromo === palavra){
        return 'É um palidromo'
    }else{
        return 'Não é um palidromo'
    }
}

console.log(verificaPalidromo(palavra))