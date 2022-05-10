// Exercicios de Interpretação de Código

// QUESTÃO 1
// let a = 10
// let b = 10 

// console.log(b)

// b=5
// console.log(a, b)

// RESPOSTA: VAI IMPRIMIR: 10, 5

// QUESTÃO 2
// let a =10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// RESPOSTA: VAI IMPRIMIR: 10, 10, 10

// QUESTÃO 3
// let cargaHoraria = prompt("Quantas horas voce trabalha por dia?")
// let valorDia = prompt("Quanto você recebe por dia?")
// alert('Você recebe ${cargaHoraria/valorDia} por hora')



// EXERCÍCIO DE ESCRITA DE CÓDIGO
// QUESTÃO 1
let nome 
let idade 

console.log(typeof nome, idade)

/* A resposta que apareceu em ambos casos foi "undefined" já que as variáveis
não foram definidas ainda */ 

let nome1 = "Giovanna"
let idade1 = 28

prompt("Qual o seu nome?")
prompt("Qual sua idade?")

console.log(typeof nome1, idade1)

/* A resposta que apareceu na variável "nome1" foi "string" e na variável "idade1"
foi "number" */

console.log("Olá,", nome1, "você tem", idade1, "anos")

//QUESTÃO 2

prompt("Você gosta da cor amarela?", "SIM")
prompt("Você sabe sobre misturas de cores?", "NÃO")
prompt("Você sabe as cores primárias?", "SIM")

//QUESTÃO 3

let a = 10
let b = 25 
let c = undefined
c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)




