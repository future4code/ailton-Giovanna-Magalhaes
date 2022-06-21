```javascript
 const quantidadeFinal = arrayDeNumeros.filter(item => item === numeroEscolhido).length
 
 if(quantidadeFinal === 0) {
   return `Número não encontrado`;
 } else {
   return `O número ${numeroEscolhido} aparece ${quantidadeFinal}x`;
 };