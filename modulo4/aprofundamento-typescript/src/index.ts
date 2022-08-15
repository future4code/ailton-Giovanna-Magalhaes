//EXERCÍCIO 1

/*O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?*/

// let minhaString:string = 25
// RESPOSTA: O programa indica que o número não pode ser associada a uma string;

/*b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como 
criamos no typescript uma variável que aceite mais de um tipo de valor?*/

//let meuNumero:number = 50
// RESPOSTA: Através do operador, deixando a variável da seguinte forma: let meuNumero2:number|string = "Oi"

/*c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.

Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos 
tenham os mesmos campos.*/

// let nome: string = "Giovanna";
// let idade: number = 28;
// let corFavorita: string = "Amarelo";

// type Pessoas = {
//   nome: string;
//   idade: number;
//   corFavorita: string;
// };

// const novaPessoa: Pessoas = {
//   nome: "Lucas",
//   idade: 27,
//   corFavorita: "Azul",
// };

// const novaPessoa2: Pessoas = {
//   nome: "Eduardo",
//   idade: 27,
//   corFavorita: "Verde",
// };

// const novaPessoa3: Pessoas = {
//     nome: "Camila",
//     idade: 30,
//     corFavorita: "Rosa"
// }

// console.log(novaPessoa, novaPessoa2, novaPessoa3)

//d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso

// let nome: string = "Giovanna";
// let idade: number = 28;
// let corFavorita: string = "Amarelo";

// enum Cores {
//   VERMELHA = "Vermelha",
//   LARANJA = "Laranja",
//   AMARELA = "Amarelo",
//   VERDE = "Verde",
//   AZUL = "Azul",
//   AZULESCURO = "AzulEscuro",
//   VIOLETA = "Violeta",
// }

// type Pessoas = {
//   nome: string;
//   idade: number;
//   corFavorita: Cores;
// };

// const novaPessoa: Pessoas = {
//   nome: "Lucas",
//   idade: 27,
//   corFavorita: Cores.AZUL,
// };

// const novaPessoa2: Pessoas = {
//   nome: "Eduardo",
//   idade: 27,
//   corFavorita: Cores.LARANJA,
// };

// const novaPessoa3: Pessoas = {
//   nome: "Camila",
//   idade: 30,
//   corFavorita: Cores.VERMELHA,
// };

// console.log(novaPessoa, novaPessoa2, novaPessoa3);

// EXERCÍCIO 2
/*a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    
    b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas.
    
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

Todas entram como Array<Number>.

c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de 
objeto desse tipo, declarado em JavaScript:
const amostraDeIdades = {
    
    numeros: [21, 18, 65, 44, 15, 18],
    
    obterEstatisticas: (numeros) => {...}
}
type Amostras = {
    numeros: number[],
    obterEstatisticas: {maior: number, menor: number, media: number}
}
*/

// EXERCÍCIO 3
/*a) Copie o código acima para um arquivo .ts depois:

- crie um *type* para representar um post;
- Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.*/
// type Posts = {
//   autor: string;
//   texto: string;
// };

// const AlvoDumbledore: Posts = {
//   autor: "Alvo Dumbledore",
//   texto: "Não vale a pena viver sonhando e se esquecer de viver",
// };
// const SeveroSnape: Posts = {
//   autor: "Severo Snape",
//   texto: "Menos 10 pontos para Grifinória!",
// };
// const HermioneGranger: Posts = {
//   autor: "Hermione Granger",
//   texto: "É levi-ô-sa, não levio-sá!",
// };
// const Dobby: Posts = {
//   autor: "Dobby",
//   texto: "Dobby é um elfo livre!",
// };
// const LordVoldemort: Posts = {
//   autor: "Lord Voldemort",
//   texto: "Avada Kedavra!",
// };


// function buscarPostsPorAutor(post:string, autorInformado:string) {
//   return Posts.filter(
//     (post:string) => {
//       return post.autor === autorInformado
//     }
//   )
// }