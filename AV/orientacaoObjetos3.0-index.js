import { Conta } from "./orientacaoObjetos3.0-conta.js";

const conta1 = new Conta('Alice','242654','462283384-12', 0)
const conta2 = new Conta('Gugas', '22335323', '123456789-11', 0)
console.log(conta1.MostrarNome) //quando o get ta no metodo, não precisa de ()
console.log(conta1.alteraNome = 'Maria Alice');
conta1.depositar(15);
console.log(conta1.saldo)
conta1.sacar(5)
console.log(conta1.saldo)
conta1.Transferir(5,conta2)
console.log(conta1.saldo)
console.log(conta2.saldo)

