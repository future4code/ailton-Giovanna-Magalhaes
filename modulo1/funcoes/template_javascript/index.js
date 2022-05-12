// Exercícios de interpretação de código;

/* 1) Leia o código abaixo:

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
RESPOSTA: console.log(minhaFuncao(2)) = 10 // console.log(minhaFuncao(10)) = 50

b) O que aconteceria se retirasse os dois `console.log` simplesmente invocasse a função `minhaFuncao(2)` e 
`minhaFuncao(10)`? O que apareceria no console?
RESPOSTA: não apareceria nada.


2) Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) Explique o que essa função faz e qual é sua utilidade
RESPOSTA: Ela vai deixar a resposta em letra minúscula e identificar a palavra "cenoura" no texto 
e a partir disso determinar a saída no console através do (true/false);

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
1. `Eu gosto de cenoura`
2. `CENOURA é bom pra vista`
3. `Cenouras crescem na terra`

RESPOSTA: 1) true
2) true
3) true*/

// Exercícios de escrita de código

/* 1) Escreva as funções explicadas abaixo:
    
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, 
como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.". Troque o nome, idade, cidade e se é estudante ou 
não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/

// function informacoesPessoais() {

// }

// console.log("Eu sou Giovanna, tenho 28 anos, moro em Recife e sou estudante da Labenu")

/* b)Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), 
a idade (number), a cidade (string) e uma profissão (string).  Ela deve retornar uma string que unifique todas as 
informações da pessoa em uma só mensagem com o template: 
"Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]."*/

// function imprimeDados(nome) {

// const nome1 = "Giovanna"
// const idade1 = 28
// const endereco1 = "rua le parc, 100"
// const profissao = "arquiteta"

// console.log(`Eu sou ${nome1}, tenho ${idade1} anos, moro na ${endereco1} e sou ${profissao}`)

// }

// imprimeDados ()


/*2. Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

// function imprimeNumeros(num1, num2) { 

//     const soma = num1 + num2
// return soma
// } 

// console.log(imprimeNumeros(15, 30))

/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior 
ou igual ao segundo.*/

// function imprimeNumeros(num1, num2) { 

//     const volta = num1 >= num2
// return volta
// } 

// console.log(imprimeNumeros(60, 30))

/*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.*/

// function imprimeNumeros(num1) { 

//         const volta = (num1 % 2 === 0) 
//     return volta
//     } 
    
//     console.log(imprimeNumeros(25))

/*d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho  dessa mensagem,  juntamente 
com uma versão dela em letras maiúsculas.*/

// function mensagem(novaMensagem) {
    
//     let frase1 = "A vida é boa!"
//     return console.log(frase1.length, frase1.toLocaleUpperCase())
    
// }

// mensagem()

/* 3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário 
sendo o argumento. Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10. */


// let numeroDoUsuario = Number(prompt("Insira um número aqui"))
// let numeroDoUsuario2 = Number(prompt("Insira outro número aqui"))

// function imprimeNumeros(num1, num2) {

//         const soma = num1 + num2

//     return soma
//     } 
    
//     console.log(imprimeNumeros(numeroDoUsuario, numeroDoUsuario2))


//     function imprimeNumeros2(num1, num2){

// const subtração = num1 - num2
// return subtração    
//     }

//     console.log(imprimeNumeros2(numeroDoUsuario, numeroDoUsuario2))


// function imprimeNumeros3(num1, num2){

//     const multi = num1 * num2
//     return multi
// }

// console.log(imprimeNumeros3(numeroDoUsuario, numeroDoUsuario2))

// function imprimeNumeros4(num1, num2) {

//     const div = num1 / num2
//     return div

// }

// console.log(imprimeNumeros4(numeroDoUsuario, numeroDoUsuario2))