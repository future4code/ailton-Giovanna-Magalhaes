/* EXERCÍCIO 1
a) Qual endpoint você deve utilizar para isso?
RESPOSTA: o GET

b) Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa" 
RESPOSTA: Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o 
valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado. Uma função assíncrona pode 
conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função 
assíncrona e retorna o valor resolvido.

c) Implemente uma função nomeada que faça o que foi pedido.
async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};

EXERCÍCIO 2
a) Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
RESPOSTA: 

b) Implemente a função solicitada, usando arrow function
const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};

*/