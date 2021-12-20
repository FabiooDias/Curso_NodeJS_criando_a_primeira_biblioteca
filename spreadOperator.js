const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros  = [...numerosPares, ...numerosImpares]

const[num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6]

const pessoa = {
    nome: "Fabio",
    idade: 36
}

const pessoaComTelefone = {...pessoa, telefone: 993659138}
console.log(pessoaComTelefone)

const {telefone} = pessoaComTelefone
console.log(telefone)

function imprimeDados({nome, idade}){
    
    console.log(nome, idade)
}

imprimeDados(pessoa)