class Animal{
    constructor(tipo, cor, peso){
        this.tipo = tipo
        this.cor = cor
        this.peso = peso
    }
    obterTipo(){
        return this.tipo
    }
    obterCor(){
        return this.cor
    }
}

let meuPet = new Animal('felino', 'branco', '5kg')
console.log(typeof meuPet)
console.log(meuPet)
console.log('*****************')
console.log(typeof Animal.prototype)


