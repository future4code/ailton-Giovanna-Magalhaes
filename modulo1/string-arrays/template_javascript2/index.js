// EXERCÍCIO NOTION - 11/05/2022

//Exercícios de interpretação de código
// EXERCÍCIO 1 

// let array
// console.log('a. ', array) 

// RESPOSTA: a. undefined

// let array = null
// console.log("b.", null)

// RESPOSTA: b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// RESPOSTA: c. 11

// let i = 0
// console.log('d. ', array [i])

// RESPOSTA: d. 3

// array [i+1] = 19
// console.log('e. ', array)

// RESPOSTA: e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array [i+6]
// console.log('f. ', valor)

// RESPOSTA: f. 9

// EXERCÍCIO 2 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// RESPOSTA: 27

// Exercício de Escrita de Código
// EXERCÍCIO 1 

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, imprima no console a seguinte mensagem: 
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/

// let nomeDoUsuario = prompt("Qual o seu nome?")
// let emailDoUsuario = prompt("Qual o seu e-mail?")

// console.log(" O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda(o), " + nomeDoUsuario)

// EXERCÍCIO 2 

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos: 

a) Imprima no console o array completo*/

// const listaDeComidas = ["Sushi", "Hambúrguer", "Brócolis", "Batata", "Brownie"]

// console.log(listaDeComidas)

/* b) Imprima no console a mensagem "Essas são as minhas comidas preferidas:", 
seguida por cada uma das comidas, uma embaixo da outra. */

// console.log(`Essas são as minhas comidas favoritas: 
// 1. Sushi;
// 2. Hambúrguer;
// 3. Brócolis;
// 4. Batata; 
// 5. Brownie.`)

/* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.*/

// let comidaDoUsuario = prompt("Qual a sua comida favorita?")

// const listaDeComidas = ["Sushi", "Hambúrguer", "Brócolis", "Batata", "Brownie"]
// listaDeComidas.splice(1,1)

// let novaListaDeComidas = ["Sushi", comidaDoUsuario, "Brócolis", "Batata", "Brownie"]
// console.log(novaListaDeComidas)

// EXERCÍCIO 3
/* 3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.*/

let listaDeTarefas = []

/*b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.*/

 let listaDeTarefas1 = prompt("1 tarefa que você precisa realizar no dia de hoje:")
 let listaDeTarefas2 = prompt("outra que você precisa realizar no dia de hoje:")
 let listaDeTarefas3 = prompt("diga uma última tarefa para o dia de hoje")

listaDeTarefas.push(listaDeTarefas1, listaDeTarefas2, listaDeTarefas3)

/*c) Imprima o array no console*/

 console.log(listaDeTarefas)

/*d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2.*/

let listaDeTarefasFeitas = Number(prompt("Qual tarefa você já realizou? Enumere de 0 a 2"))

/*e) Remova da lista o item de índice que o usuário escolheu.*/

listaDeTarefas.splice(listaDeTarefasFeitas, 1)

/*f) Imprima o array no console.*/

console.log(listaDeTarefas)
