//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
function somaArray(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        soma = soma + element
        console.log(element)
    }
    return soma
}

const array_numero = [15,2,2,3,4,5,6,7,8]
console.log(somaArray(array_numero))

function menorMaior(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= array[i]){
            console.log('maior', array[i],element);
        }
    }
}

menorMaior(array_numero)