//funções literais
function soma(a,b){
    return a + b
}
console.log(soma(1,2))
//funções anonimas
const minhaFuncao = function(a,b){return a+b}
console.log(minhaFuncao(4,9))

//escopo de funções
function aluno(nomeAluno, idadeAluno, notaAluno){
    this.nomeAluno = nomeAluno
    this.idadeAluno = idadeAluno
    this.notaAluno = notaAluno

    console.log(this.nomeAluno)
    console.log(this.idadeAluno)

    this.dadosAnonimos = function(){
        setTimeout(function(){
            console.log(this.notaAluno) //o escopo atrapalha a exibição dos resultados
        },3000)
        }
    //arrow function - são funções de escopo aberto
    this.dadosArrow = ()=>{
        setTimeout(()=>{
            console.log(this.notaAluno)
        }, 4000)
    }
}


const aluno01 = new aluno('Gustavo', 21, 10.0)
aluno01.dadosAnonimos()
aluno01.dadosArrow()

console.log('*********************');
// Sobre ARROW FUNCTION 
//1. Ela tem retorno embutido
const dobro = (a)=> 2*a
console.log(dobro(2))

//2. argumento implicito
let multiplicar = _ => 2*2
console.log(multiplicar());