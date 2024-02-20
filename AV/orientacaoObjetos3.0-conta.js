import { Operacoes } from "./orientacaoObjetos3.0-operacoes.js";

export class Conta extends Operacoes{
    constructor(nome, conta, cpf, saldo){
        super(saldo)
        this.nome = nome
        this.conta = conta
        this._cpf = cpf
    }
    get MostrarNome() {
        return this.nome;
      }
    set alteraNome(NovoNome){
        this.nome = NovoNome
    }

    get cpf(){
        return this.cpf
    }

}
