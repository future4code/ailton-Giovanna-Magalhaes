// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  
  const alturaRetangulo = Number(prompt("Insira a altura de um retângulo aqui"))
const larguraRetangulo = Number(prompt("Insira a largura de um retângulo aqui"))

let areaRetangulo = alturaRetangulo * larguraRetangulo
  
  console.log(areaRetangulo)
  return areaRetangulo

}


// EXERCÍCIO 02
function imprimeIdade(ano1, ano2) {

  const anoAtual = Number(prompt("Insira o ano atual aqui"))
  const anoNascimento = Number(prompt("Insira o ano do seu nascimento"))

  let resultado = anoAtual - anoNascimento

  console.log(resultado)
return resultado
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let pesoUsuario = Number(prompt("Insira o seu peso aqui - em kg"))
  let alturaUsuario = Number(prompt("Insira sua altura (em metros) aqui"))

  let imc = pesoUsuario / (alturaUsuario * alturaUsuario)

 return imc
}

// EXERCÍCIO 04  
function imprimeInformacoesUsuario(){ 

let nomeDoUsuario = prompt("Qual o seu nome?")
  let idadeUsuario = Number(prompt("Qual a sua idade?"))
  let emailUsuario = prompt("Qual o seu e-mail?")

  const fraseFinal = "Meu nome é ${nomedoUsuario}, tenho {idadeDoUsuario} anos, e o meu email é {emailUsuario}."
  
console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  return fraseFinal
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  let corUsuario1 = prompt("Digite uma cor favorita")
  let corUsuario2 = prompt("Digite outa cor favorita")
  let corUsuario3 = prompt("Digite a terceira cor favorita")

let listaDeCores = [corUsuario1, corUsuario2, corUsuario3]

console.log(listaDeCores)
return imprimeTresCoresFavoritas
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
 let string1 = string.toUpperCase()
  
  return string1
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  const ingressosNecessarios = custo/valorIngresso
  
  console.log(ingressosNecessarios)
return ingressosNecessarios
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
 const resultado = string1.length === string2.length

console.log(resultado)
return resultado
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

const elementoArray = array[0]

console.log(elementoArray)
return elementoArray
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const elementoArray1 = array.pop()

console.log(elementoArray1)
return elementoArray1
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  const valorPrimeiroArray = array[0]
  const valorUltimoArray = array[array.length-1]

const novoValor = array[0]
array[0] = array[array.length-1]
array[array.length-1] = novoValor

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  const igualdade1 = string1.toUpperCase()
  const igualdade2 = string2.toUpperCase()
  const resultado = igualdade1 === igualdade2

  console.log(resultado)
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Insira o ano atual aqui"))
  const anoNascimento = Number(prompt("Insira o ano do seu nascimento"))
  const identidade = Number(prompt("Insira o ano que sua carteira de identidade foi emitida"))

  let idade1 = anoAtual-anoNascimento
let renovacaoIdentidade = anoAtual - identidade

  let resultado = (idade1 <= 20 && renovacaoIdentidade >= 5) || (idade1 <= 50 && renovacaoIdentidade >= 10) || (idade1 > 50 && renovacaoIdentidade >= 15)

  console.log(resultado)
return resultado

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  const anoBissexto =(ano % 400 === 0) || (ano % 4 === 0) && !(ano % 100 === 0) && !(ano % 400 === 0)

  console.log(anoBissexto)
  return anoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

const idadeUsuario1 = prompt("Você tem mais de 18 anos?")
  const formacaoUsuario1 = prompt("Você possui ensino médio completo?")
  const disponibilidadeUsuario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

 const respostasUsuario = idadeUsuario1 === "sim" && formacaoUsuario1 === "sim" && disponibilidadeUsuario === "sim"
 
 console.log(respostasUsuario)
 return respostasUsuario
}