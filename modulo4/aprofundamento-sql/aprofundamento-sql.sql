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
  
  SET SQL_SAFE_UPDATES = 0;
  
  /*EXERCÍCIO 1 - 23/08/2022
  a) ALTER TABLE Actor DROP COLUMN salary;
  RESPOSTA: Ela vai alterar a tabela Actor, excluindo a coluna de salário.
  
  b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
  RESPOSTA: Ela vai alterar a tabela Actor, mudando a coluna de gênero, para que haja no máximo 6 caracteres.
  
  c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
  RESPOSTA: Haverá a alteração na coluna gender da tabela Actor para que ele aceite strings com até 255 caracteres.
  
  d)Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
  RESPOSTA: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
  
  EXERCÍCIO 2
  a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003.
    UPDATE Actor
SET name = "Rodrigo Simas", 
birth_date = "1992-01-06"
WHERE id = "003"
  
  b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
  UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor
set name = "Juliana Didone",
salary = 60000,
birth_date = "1984-10-11",
gender = "female"
WHERE id = "005"

EXERCÍCIO 3
a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro;
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE from Actor where gender = "male" and salary > 100000000

EXERCÍCIO 4
a) Escreva uma query que pegue o maior salário de todos os atores e atrizes;
 SELECT MAX(salary) FROM Actor
 
 b) Escreva uma query que pegue o menor salário das atrizes;
  SELECT min(salary) from Actor where gender= "female"
  
  c) Escreva uma query que pegue a quantidade de atrizes;
  SELECT COUNT(*) FROM Actor WHERE gender = "female"
  
  d) Escreva uma query que pegue a soma de todos os salários
  SELECT sum(salary) from Actor
  
  EXERCÍCIO 5
  a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
  RESPOSTA: 
  
  b)Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
  SELECT id, name FROM Actor ORDER BY name DESC
  
  c) Faça uma query que retorne todos os atores ordenados pelo salário
  SELECT * FROM Actor ORDER BY salary ASC
  
  d) Faça uma query que retorne os atores com os três maiores salarios
  SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
  
  e) Faça uma query que retorne a média de salário por gênero
   SELECT AVG(salary), gender FROM Actor GROUP BY gender;

EXERCÍCIO 6
a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
ALTER TABLE Movie ADD playing_limit_date DATE;

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
ALTER TABLE Movie CHANGE rating rating FLOAT;

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído;
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

UPDATE Movie
SET
	playing_limit_date = "2023-10-15"
WHERE id = "003"

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id).
Anote o resultado e explique.
DELETE FROM Movie WHERE id = "003"
  */

