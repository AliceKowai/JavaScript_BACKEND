const prompt = require('prompt-sync')()

let contador = 0

while(contador <10){
    console.log(contador)
    contador++
}


//////////////////////////////////////////////////////////////

while(true){
    let saida = prompt('Informe s para sair: ')
    if (saida.toLocaleLowerCase() === 's'){
        break
    }
}

