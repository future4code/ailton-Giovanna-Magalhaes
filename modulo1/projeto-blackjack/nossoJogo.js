/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const mensagemPrograma = confirm("Boas vindas ao jogo de Blackjack!")
    
    if(confirm("Quer iniciar uma nova rodada?")) {
      let carta1 = comprarCarta()
      let carta2 = comprarCarta()
      let carta3 = comprarCarta()
      let carta4 = comprarCarta()
    
      let usuario1 = `Usuário - cartas: ${carta1.texto} ${carta2.texto} - Pontuação: ${carta1.valor + carta2.valor}`
      console.log(usuario1)
      
      let computador1 = `Computador - cartas: ${carta3.texto} ${carta4.texto} - Pontuação: ${carta3.valor + carta4.valor}` 
      console.log(computador1)

 if(carta1.valor + carta2.valor > carta3.valor + carta4.valor) {
    console.log("O usuário ganhou!")
  } else if (carta3.valor + carta4.valor > carta1.valor + carta2.valor) {
    console.log("O computador ganhou!")
  } else if (carta1.valor + carta2.valor === carta3.valor + carta4.valor)
    console.log("Empate!")

          } else {
console.log("O jogo acabou")
    }