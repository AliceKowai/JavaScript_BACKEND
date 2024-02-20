//1
function concatenarArrays(array1, array2) {
    return array1.concat(array2);
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatenarArrays(array1, array2)); 

//2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros); 

//3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas); 

//4
const menuPrincipal = ['Pizza', 'Hambúrguer', 'Massa'];
const menuDeSobremesas = ['Sorvete', 'Bolo', 'Frutas'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto); 

//5
const matriz = [];
let valor = 1;

for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valor);
        valor++;
    }
    matriz.push(linha);
}

console.log(matriz);

//6
console.log(matriz[1][2]);


//7
matriz[0].splice(1, 0, 15);
console.log(matriz);



