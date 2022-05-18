// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 

// 1) Leia o código abaixo:
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//A) O que vai ser impresso no console?
//RESPOSTA: 1) "Matheus Nachtergaele"
//2) "Virginia Cavendish"
//3) "{canal: "Globo", horario: "14h"}"

// 2) Leia o código abaixo:
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//A) O que vai ser impresso no console?
// RESPOSTA: 1) "nome: Juca", "idade:3", "raca: SRD"
// 2) "nome: Juba", "idade:3", "raca: SRD"
// 3) "nome: Jubo", "idade: 3", "raca: SRD"
//B) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// RESPOSTA: clona as informações armazenadas na variável/objeto

//3) Leia o código abaixo:
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//A) O que vai ser impresso no console?
//RESPOSTA: 1) false // 2) undefined

//B)Explique o valor impresso no console. Você sabe por que isso aconteceu?
// A altura não foi definida dentro do objeto, então não tem como sair um valor no console, sendo assim,
//o valor que sai no console é "undefined"

// EXERCÍCIO DE ESCRITA DE CÓDIGO

/*1) 1. Resolva os passos a seguir: 
    
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente 
três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"*/

const pessoa = {
	nome: "Giovanna",
	apelidos:["Gio", "Gi", "Gica"]
	
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}.`)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de
// três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novosApelidos = {
...pessoa,
apelidos1: ['Gigi', 'Gigica', 'Gil']
} 

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos.apelidos1[0]}, ${novosApelidos.apelidos1[1]}, ${novosApelidos.apelidos1[2]}.`)

/*2) 2. Resolva os passos a seguir: 
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/ 

	const infoPessoa1 = {
		nome: "Jullia",
		idade: 26,
		profissao: "Psicóloga"
	}
	const infoPessoa2 = {
		nome: "Priscila",
		idade: 30,
		profissao: "Administradora"
	}

	/*b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
	1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`.*/

console.log(infoPessoa1.nome, infoPessoa1.nome.length, infoPessoa1.idade, infoPessoa1.profissao, infoPessoa1.profissao.length)
console.log(infoPessoa2.nome, infoPessoa2.nome.length, infoPessoa2.idade, infoPessoa2.profissao, infoPessoa2.profissao.length)

/* 3) Resolva os passos a seguir: 
a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho */

const carrinho = []

/* b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
nome (string) e disponibilidade (boolean - devem começar como true).*/

const frutas = {
	nome: "Banana",
	disponibilidade: true
}

const frutas1 = {
	nome: "Kiwi",
	disponibilidade: true
}

const frutas2 = {
	nome: "Jaca",
	disponibilidade: false 
}

/* c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
Invoque essa função passando os três objetos criados.*/

function solucao(fruta) {
	carrinho.push(fruta)

} 

//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

solucao(frutas)
solucao(frutas1)
solucao(frutas2)

console.log(carrinho)




