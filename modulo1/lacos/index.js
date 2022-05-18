/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
1) O que o código abaixo está fazendo? Qual o resultado impresso no console?*/

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
//   console.log(valor)
// }

// RESULTADO: O código está lendo um loop até a 5ª vez, que é o valor que está determinado na variável. O resultado impresso
//no console vai ser o número "10".

// 2) Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

/*a) O que vai ser impresso no console?
RESPOSTA: Vai ser impresso no console "19, 21, 23, 25, 27, 30", todos os números maiores que 18.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim,
o que poderia ser usado para fazer isso?
RESPOSTA: Sim, precisaria ficar da seguinte forma:*/

// const lista2 = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let maior = 0
// for (let numero of lista2) {
//   if (numero = maior) {
// 	maior = numero	
// lista2.push(numero)
// 	}
// }
//   console.log(lista2)

/*3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?*/

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/* RESULTADO: Seria impresso no console: 
*
**
***
**** 
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO
// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b)  Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em 
// um array.
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// let numeroBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?")) 
// let listaBichinhos = []

// if(numeroBichinhos === 0) {
// console.log(`Que pena! Você pode adotar um pet!`) 
// } else if (numeroBichinhos > 0) {
//  for(i =0; i < numeroBichinhos; i++) {
//      let nomeBichinhos = prompt("Digite o nome dele (s)!")
//      listaBichinhos.push(nomeBichinhos)
//  }
// }

// console.log(listaBichinhos)

/* 2) Considere que você tenha acesso a um `array` (chamado de 'array original') que é composto somente 
de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações 
pedidas:
    a) Escreva um programa que **imprime** cada um dos valores do array original.*/
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    // const imprime = () => { 
    // } 
    // console.log(array)

    /* b) Escreva um programa que imprime cada um dos valores do array original divididos por 10*/

    // for (let valor of array) {
//     console.log(valor/10)
// }

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original 
// e imprima esse novo array.

//     const numPar = () => {
//         let arrayPar = []
//         for(let i = 0; i < array.length; i++){ 
//         if (array[i] % 2 === 0){  
//             const elemento = array[i]
//         arrayPar.push(elemento)
//         }
//     } 
//         console.log(arrayPar)
// }

// numPar()

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: 
// "O elemento do índex i é: numero". Depois, imprima este novo array.

// const numeroIndex = () => {
//             let arrayNovo = []
//             for(let i = 0; i < array.length; i++){   
//                 const elemento = array[i]
//             arrayNovo.push(`O elemento do index ${i} é: ${elemento}`)
//             }
//             console.log(arrayNovo)
//         } 
            
//     numeroIndex()
  

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// funcaoNova = () => {
//     let numero1 = 0
//     let numero2 = 300

//     for (let i =0; i < array.length; i++) {
//         const elemento = array[i]
//         if (elemento > numero1) {
//              numero1 = elemento
//         }
//         const elemento2 = array[i]
//         if (elemento2 < numero2) {
//             numero2 = elemento2
//         }
//     }
//     console.log(`O maior número é ${numero1} e o menor número é ${numero2}`)
// }

// funcaoNova(array)