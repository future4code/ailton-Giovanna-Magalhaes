// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
/* RESPOSTA: Para simular a chegada de uma requisição, passaremos valores de entrada pelo terminal, que serão acessados no código pela propriedade
process.argv. O terminal também é o console do Node, ou seja, ainda teremos disponível o método console.log, que será um grande recurso visual no backend.
Para rodar um arquivo javascript pelo terminal, utilizaremos o comando node nomeDoArquivo.js*/

// EXERCÍCIO 1
const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = process.argv[4]

console.log(`Olá ${process.argv[2]}! Você tem ${process.argv[3]} "anos.`)
console.log(`Olá ${process.argv[2]}! Você tem ${process.argv[3]} "anos. Em sete anos, você terá ${process.argv[4]} anos.`)

