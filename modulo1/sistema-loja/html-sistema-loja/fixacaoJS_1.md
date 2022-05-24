```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

const salarioMensal = 2000
let salarioVariavel = qtdeCarrosVendidos * 100
let comissao = valorTotalVendas * 0.05

let salarioFinal = salarioMensal + comissao + salarioVariavel
  
  return salarioFinal
}