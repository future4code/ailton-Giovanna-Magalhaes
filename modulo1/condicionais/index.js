// EXERCÍCIO DE LEITURA DE CÓDIGO 
//1) Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza?  
// RESPOSTA: O código pergunta ao usuário um número aleatório para ele testar, e mostra se o número é par ou ímpar.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// RESPOSTA: Para números pares.
// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// RESPOSTA: Para números ímpares.

/*2) O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um 
supermercado:*/

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a) Para que serve o código acima?
RESPOSTA: Para o usuário descobrir o preço de alguma fruta através de uma pesquisa pelo nome da fruta

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
RESPOSTA: "O preço da fruta Maçã é R$2.25"

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que 
está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
RESPOTA: "O preço da fruta Pêra é R$5"

3) Leia o código abaixo:*/
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
/*a) O que a primeira linha está fazendo?
RESPOSTA: Solicitando ao usuário que digite um primeiro número
b)  Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? 
RESPOSTA: Se o número digitado foi "10", a mensagem no terminal vai ser "Esse número passou no teste!". Se fosse "-10", 
a mensagem aparecida no terminal vai ser de erro.
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
RESPOSTA: Sim, haverá mensagem de erro, já que a variável "mensagem" tá definida apenas dentro do escopo local e o
console.log está no escopo global*/


// EXERCÍCIO DE ESCRITA DE CÓDIGO:
/* 1) Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
(apenas maiores de idade).
   a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.*/
// // b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
// let maiorDeIdade = Number(prompt("Qual a sua idade?"))

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// const podeDirigir = (maiorDeIdade) => { 
// if(maiorDeIdade >= 18) {
//     console.log("Você pode dirigir!")
// } else { 
//     console.log("Você não pode dirigir!")
// }
// }

// podeDirigir(maiorDeIdade)

/* 2) Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino)
ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else*/

// let turnoDeEstudo = prompt("Qual turno você estuda? M (matutino), V (Vespertino) ou N (Noturno)")

// const turno = (turnoDosEstudos) => {
// if(turnoDosEstudos === 'M') {
//     return `Bom Dia!`
// } else if(turnoDosEstudos === 'V') {
//      return `Boa Tarde!`
// } else (turnoDosEstudos === 'N') 
// return `Boa Noite!`
// }

// console.log(turno(turnoDeEstudo))

// 3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turnoDeEstudo = prompt("Qual turno você estuda? M (matutino), V (Vespertino) ou N (Noturno)")

// const turno = (turnoDosEstudos) => {
// switch (turnoDosEstudos) {
//     case `M`:
//     return `Bom Dia!`
//     case `V`:
//   return `Boa Tarde!`
// case `N`:
//     return `Boa Noite!`
// }
// }

// console.log(turno(turnoDeEstudo)

/* 4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de 
filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir
o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

// let filmeDoDia = prompt("Qual gênero de filme você quer assistir?")
// let precoDoIngresso = Number(prompt("Qual o valor do ingresso do filme?"))

//  const filme = (genero, preço) => {
// if(genero === "Fantasia" && preço <= 15) {
//     return `Bom Filme!`
// } else if(genero !== 'Fantasia' || preço > 15) 
//      return `Escolha outro filme! :(`

// }

// console.log(filme(filmeDoDia, precoDoIngresso))