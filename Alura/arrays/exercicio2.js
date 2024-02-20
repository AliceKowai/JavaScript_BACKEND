let i = 5;
let valorA = i++;
console.log(valorA); // Saída: 5, porque o valor original de i é usado primeiro e depois incrementado
console.log(i);      // Saída: 6, porque i foi incrementado depois de ser usado na expressão

let j = 5;
let valorB = ++j;
console.log(valorB); // Saída: 6, porque j é incrementado antes de ser usado na expressão
console.log(j);      // Saída: 6, porque j foi incrementado antes de ser usado na expressão
