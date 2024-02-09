const prompt = require('prompt-sync')()
let idade = Number(prompt('Informe sua idade: '))

if(idade < 12 && idade>=0){
    console.log('Você é uma criança')
}else if(idade< 18 && idade >=12){
    console.log('Você é adolescente')
}else if(idade >= 18 && idade < 60){
    console.log('Você é adulto')
}else if(idade >60 && idade<150 ){
    console.log("Você é idoso.")
}else {
    console.log('Impossivel validar sua idade')
}