// crie um codigo que receba um valor e fala a conversçai de acordo com a solicitação do usuario.
function metros(valor, paraValor){
    switch (paraValor) {
        case 'dm':
            valor*10
            break;
        case 'cm':
            valor*100
            break;
        case 'mm':
            valor*1000
            break;
    }
}




function conversor(deValor, paraValor, valor){
    if (!isNaN(valor)){
        console.log(metros(valor,paraValor ))
      
    }else{
    console.log(`${valor} não é um valor valido`)
    }
}









const prompt = require('prompt-sync')()
const deValor = prompt(`Informe a medica que você quer converter:
Quilometro: km
hectometro: hm
dametro: dam
metro: m
diametro: dm
centimentos: cm
milimetros: mm
`)
const paraValor = prompt(`Informe para qual medida você quer converter:
Quilometro: km
hectometro: hm
dametro: dam
metro: m
diametro: dm
centimentos: cm
milimetros: mm
`)
const valor = Number(prompt('Informe um valor numerico: '))

conversor(deValor, paraValor, valor)