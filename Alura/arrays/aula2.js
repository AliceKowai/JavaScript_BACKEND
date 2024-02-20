//O método slice() em JavaScript é utilizado para criar uma cópia de parte de um array, retornando um novo array com os elementos selecionados. Ele não altera o array original.
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
//arr.slice([início[,fim]])
//precisa de um parâmetro, que é o início do array onde queremos fazer o corte, e o final é opcional

const sala1 = listaEstudantes.slice(0,listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);


console.log(sala1);
console.log(sala2);

