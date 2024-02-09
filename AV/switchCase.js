const prompt = require('prompt-sync')()
let idade = Number(prompt('Digite sua idade: '))

switch(true){
    case idade < 12 && idade >= 0:
        console.log('Você é uma criança')
        break
    case idade > 12 && idade < 18:
        console.log('Você é um adolescente')
        break
    case idade >= 18 && idade<60:
        console.log('Você é um adulto')
        break
    case idade >=60 && idade < 150:
        console.log('Você é um idoso')
        break
    default:
        console.log('Impossivel calcular sua idade')
}

///////////////////////////////////////////////

let mesNumero = Number(prompt('Informe o numero do mes que você nasceu: '))
switch(mesNumero){
    case 1:
        console.log('Você nasceu em janeiro')
        break
    case 2:
        console.log('Você nasceu em fevereiro')
        break
    case 3:
        console.log('Você nasceu em março')
        break
    case 4:
        console.log('Você nasceu em abril')
        break
    case 5:
        console.log('Você nasceu em maio')
        break
    case 6:
        console.log('Você nasceu em junho')
        break
    case 7:
        console.log('Você nasceu em julho')
        break
    case 8:
        console.log('Você nasceu em agosto')
        break
    case 9:
        console.log('Voce nasceu em setembro')
        break
    case 10:
        console.log('Voce nasceu em outubro')
        break
    case 11:
        console.log('Voce nasceu em novembro')
        break
    case 12:
        console.log('Você nas em dezembro')
        break
    default:
        console.log('Mês informado não é valido')
}

///////////////////////////////////////////////////////////
let salario = Number(prompt('Informe seu salario: '))

switch(true){
    case salario > 1000 && salario <= 1500:
        console.log(`Seu desconto é de ${salario *0.1}`)
        break
    case salario > 1500 && salario <= 3000:
        console.log(`Seu desconto é de ${salario * 0.15}`)
        break
    case salario > 3000:
        console.log(`Seu Desconto é de ${salario*0.20}`)
        break
    default:
        console.log(`Impossivel calcular seu salario`)
}
