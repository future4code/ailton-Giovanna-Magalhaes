``` javascript 

function calculaPrecoTotal(quantidade) {
  let precoMenor = 1.30* quantidade
  let precoMaior = 1 * quantidade
  
  if (quantidade >= 12) {
    return precoMaior
  } else {
    return precoMenor
  }