//O método splice() em JavaScript é usado para modificar o conteúdo de um array, adicionando novos elementos e/ou removendo elementos existentes. Ele pode ser utilizado para adicionar, remover ou substituir elementos de um array
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//slice(indice, numeroDeElementosRemovidos)
listaEstudantes.splice(1, 2, 'Rodrigo','Alice');

console.log(listaEstudantes);

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)

