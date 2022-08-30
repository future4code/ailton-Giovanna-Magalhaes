CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

/* 
EXERCÍCIO 1 
a) VARCHAR = strings que definem o máximo de caracteres,
DATE = representa uma data,
FLOAT = representa um número não inteiro em uma tabela.

b) SHOW TABLES apareceu apenas uma coluna retornada, que é a que foi criada ali em cima, nomeada de Actor.
Já a SHOW DATABASE apareceu tudo que está escrito no Query. Nesse caso, a Table lá em cima e as respostas do exercício
aqui embaixo.

c) Apareceu as informações sobre a tabela criada, como o ID, o name, o salary, birth_date e gender. Todos os types 
atribuídos a cada campo.
*/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

/* EXERCÍCIO 2
a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

/*b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. 
Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Error Code: 1062. Duplicate entry '002' for key PRIMARY.
Essse erro aconteceu por ter o ID repetido. Ai não permite que você adicione outra informação para o mesmo KEY PRIMARY.

c) Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor 
diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o 
também como resposta.

1)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

"Error Code: 1136. Column count doesn't match value count at row 1."
RESPOSTA: As informações que estão sendo solicitadas para adicionar na tabela não coincidem com as informações necessárias que estão na tabela criada 
previamente que são: id, name, salary, birth_date, gender. para você conseguir inserir todas as informações, precisa chamar nos parenteses, ou seja: 
INSERT INTO Actor (id, name, salary, birth_date, gender)

2)INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Error Code: 1364. Field 'name' doesn't have a default value
RESPOSTA: o campo "name" não tem um valor definido.

3) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
RESPOSTA: O valor na coluna "birth_date" foi inserida de forma errada, já que é uma string e precisa estar entre "".
 */
 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

/* EXERCÍCIO 3
a) Escreva uma query que retorne todas as informações das atrizes.
SELECT * from Actor WHERE gender = "female"

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos.
SELECT salary from Actor WHERE name = "Tony Ramos"

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT * from Actor WHERE gender = "invalid"
Não dá erro, mas retorna a tabela vazia, já que o "gender" é definido em todas as informações que nós adicionamos à tabela.

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary < 500000

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e
explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.
SELECT id, nome from Actor WHERE id = "002"

RESPOSTA: Error Code: 1054. Unknown column 'nome' in 'field list'
A coluna "nome" não está na tabela Actor, já que o identificador é name.

EXERCÍCIO 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
a) Explique com as suas palavras a query acima.
O comparador LIKE, é utilizado para comparar strings. No caso do query acima, para verificar se uma palavra começa com a letra "A", usamos a
sintaxe: LIKE "A%" porque % é utilizado para indicar uma string genérica. O operador "ou" é indicado por OR. Sendo assim, a primeira condição é 
indicada por: WHERE name LIKE "A%" OR name LIKE "J%". 

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00.
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 300000

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A" OR name LIKE "%a" AND salary between 350000 and 900000;
*/

-- EXERCÍCIO 5
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
    );
    
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que 
    Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
    A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );
   
   INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Lisbela e o Prisioneiro",
    "A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a 
    uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às 
    dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se 
    envolvido com sua esposa no passado.",
    "2003-08-22",
   10
    );
    
-- EXERCÍCIO 6
    /*
a) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, rating from Movie WHERE id > 001

b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movie WHERE title = "Lisbela e o Prisioneiro"

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`;
SELECT id, title, rating from Movie WHERE rating >= 7

EXERCÍCIO 7
a) Retorna um filme cujo título contenha a palavra vida;
   SELECT * FROM Movie
WHERE title LIKE "%vida%";

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA 
para exemplificar.
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

c) Procure por todos os filmes que já tenham lançado;
SELECT * FROM MOVIE
WHERE release_date < "2022-08-22";

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
  */
  