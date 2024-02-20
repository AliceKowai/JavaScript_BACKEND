//rest - é uma sintaxe que permite representar um numero de argumentos indefinidos em um array
//quando está no argumento da função é rest e o spread para interação entre interaveis
const cadastrar =(usuarios,...novosUsuarios)=>{ //rest
    let totalDeUsuarios =[
        ...usuarios, //spread
        ...novosUsuarios,
    ]
    console.log(totalDeUsuarios)
}

let usuarios = ['Neyva', 'Lara', 'Levi']
let novosUsuarios = cadastrar(usuarios, "Sedex","Gabriel", "cu")
//rest deixa ilimitado os argumentos
let numeros = (...meusNumeros) =>{
    console.log(meusNumeros.length)
}

let novosNumeros = numeros(1,2,3,4,5,6,7,8,9,10,11)