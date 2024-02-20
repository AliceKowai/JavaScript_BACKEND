const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);


const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media2 = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media2 += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media2 = media2/notasGerais.length
 
console.log(media2)

const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

