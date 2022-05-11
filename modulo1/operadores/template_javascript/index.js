// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a.", resultado)

// let resultado = bool1 && bool2 && bool3
// console.log("b.", resultado)
                              
// let resultado = !resultado && (bool1 || bool2)
// console.log("c.", resultado)

// console.log("d.", typeof resultado)

/* O RESULTADO VAI SER: a. false
b. false
c. true
d. boolean*/

// EXERCÍCIO 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/* RESPOSTA: O que vai ser impresso nesse console é a concatenação dos números, ou seja, o valor que o 
usuário inserir no primeiro prompt vai se unir ao segundo, ao invés de somar. Por exemplo: Se o usuário inserir
o valor "30" e "40", ao invés de entregar "70", vai ser entregue "3040". Isso acontece porquê o prompt não 
vai ser reconhecido como valor numérico se não for transformado de String para Number. 
A solução para que os números não concatenarem é a que vai ser apresentada abaixo, no exercício 3.*/

// EXERCÍCIO 3

// const primeiroNumero = Number(prompt("Digite um numero!"))
// const segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// PROGRAMA 1 

// let idadeDoUsuario = Number(prompt("Qual a sua idade?"))
// let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo/amiga?"))

// let resultado = idadeDoUsuario - idadeMelhorAmigo

// console.log(prompt("Sua idade é maior do que a idade do seu melhor amigo?", "true, false"))
// console.log(resultado)

// PROGRAMA 2

// let numeroDoUsuario = Number(prompt("Insira um número par"))

// let resultado = numeroDoUsuario / 2
// console.log(resultado)

/* RESPOSTA c): O programa faz a divisão perfeitamente, dividindo qualquer número par por 2, mostrando
o resultado no console.
RESPOSTA d): Se colocado um número ímpar, o programa roda normalmente e oferece a resposta com número
decimal. Por exemplo, se dividirmos 9 por 2, o programa entrega 4.5 de resposta.*/

// PROGRAMA 3

// let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

// const idadeEmMeses = idadeDoUsuario * 12
// console.log("a)", idadeEmMeses, "meses")

// const idadeEmDias = idadeDoUsuario * 30
// console.log("b)", idadeEmDias, "dias")

// const idadeEmHoras = idadeDoUsuario * 24 * 30 * 12
// console.log("c)", idadeEmHoras, "horas")

// PROGRAMA 4

// let numero1 = Number(prompt("Insira um número aqui!"))
// let numero2 = Number(prompt("Insira outro número aqui também!"))

// const resultado1 = numero1 > numero2
// console.log("O primeiro número é maior do que o segundo?", resultado1)

// const resultado2 = numero1 === numero2
// console.log("O primeiro numero é igual ao segundo?", resultado2)

// const resultado3 = numero1 % numero2 === 0
// console.log("O primeiro numero é divisível pelo segundo?", resultado3)

// const resultado4 = numero2 % numero1 === 0
// console.log("O primeiro numero é divisível pelo segundo?", resultado4)
