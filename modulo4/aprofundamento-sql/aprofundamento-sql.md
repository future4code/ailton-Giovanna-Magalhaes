  
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

