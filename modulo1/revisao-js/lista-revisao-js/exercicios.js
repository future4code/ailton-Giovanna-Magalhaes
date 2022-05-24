// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
function compararArray (a, b) {
   return (a - b)
   }
return array.sort(compararArray)
}

  
// EXERCÍCIO 04
function retornaNumerosPares(array) {
const retornaPares = array.filter((numero) =>{
return numero %2 === 0
})

return retornaPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   const retornaPares = array.filter((numero) =>{
      return numero %2 === 0
      }).map((numero) => {
         return numero**2
      })
      
      return retornaPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maior = - Infinity
for (let numero of array) {
   if (numero > maior){
      maior = numero
   }
}
return maior
   } 

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = num1
let maiorDivisivelPorMenor = true
let diferenca = Math.abs(num1-num2)


   if (num2 > num1) {
maiorNumero = num2;
maiorDivisivelPorMenor = (maiorNumero % num1 === 0);
} else {
   maiorDivisivelPorMenor = (maiorNumero % num2 === 0);
}
return {
   maiorNumero: maiorNumero, 
   maiorDivisivelPorMenor: maiorDivisivelPorMenor, 
   diferenca: diferenca
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayNova = []
   for(let i = 0; arrayNova.length < n; i++)
  if(i % 2 === 0){
     arrayNova.push(i)
}
  return arrayNova
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
return `Equilátero`
} else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
   return `Escaleno`
} else (ladoA === ladoB && ladoA === ladoC && ladoB !== ladoC)
return `Isósceles`
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let primeiroMaior = - Infinity
let segundoMaior = - Infinity
let primeiroMenor = + Infinity
let segundoMenor = Infinity

for (let number of array) {
   if (number > primeiroMaior) {
      primeiroMaior = number
   } if (number < primeiroMenor) {
      primeiroMenor = number
   }
}
for (let number of array) {
   if (number > segundoMaior && number !== primeiroMaior) {
      segundoMaior = number
   } if (number < segundoMenor && number !== primeiroMenor) {
      segundoMenor = number
}
}
const resultado = [segundoMaior, segundoMenor]
return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa,
   nome: "ANÔNIMO"
}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter((autorizadas) => {
      return autorizadas.altura >= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60
      }) 
      console.log (pessoas)
      console.log(pessoasAutorizadas)
      return pessoasAutorizadas
   }

  
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoPermitidas = pessoas.filter((itens) => {
     return itens.idade <= 14 || itens.idade > 60 || itens.altura < 1.50 
  })

  return pessoasNaoPermitidas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}