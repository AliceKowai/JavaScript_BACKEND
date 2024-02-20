function pessoa(nome, sobrenome){
    nome = nome
    sobrenome = sobrenome
    console.log(`Meu nome é ${nome} ${sobrenome}`)
}

pessoa('Alice', 'Costa')

class Pessoa{
    constructor(){
        this.nome = ''
        this.sobrenome = ''
    }

    nomePessoa(primeiroNome){
        this.nome = primeiroNome
        console.log(`Meu nome é ${this.nome}`)
    }
    sobrenomePessoa(segundoNome){
        this.sobrenome = segundoNome
        console.log(`Meu sobrenome é ${segundoNome}`)
    }

    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobrenome
        console.log(`Meu nome completo é ${nomeCompleto}`)
    }
}

let alice = new Pessoa()
alice.nomePessoa('Alice')
alice.sobrenomePessoa('Costa')
alice.nomeCompleto()