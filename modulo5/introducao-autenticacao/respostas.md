EXERCÍCIO 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
RESPOSTA: Sim, concordo. O uso do 0 como number pode ser confundido pelo programa e não reconhecendo como número, com o uso de strings, fica mais fácil
essa autenticação.

EXERCÍCIO 2 

const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

a) Explique o código acima com as suas palavras.
RESPOSTA: Começa-se com a construção de uma tabela para identificar o usuário, depois a criação de uma variável utilizando do Knex para o armazenamento
das informações protegidas dos clientes e depois a variável que cria novos usuários, solicitando id, email e senha e quando criadas, o usuário é adicionado
a primeira tabela criada la em cima (userTableName);

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
RESPOSTA: 

CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

EXERCÍCIO 3

import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

a) O que a linha as string faz? Por que precisamos usar ela ali?
RESPOSTA: Serve para tipar o JWT_KEY, garantindo que ele não seja confundido pelo programa. 