CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
			"001",
    "Excelente!",
    9,
		"005"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
			    "ótimo filme!",
    7,
		"004"
);
/* EXERCÍCIO 1 - 25/08/2022
a) Explique o que é uma chave estrangeira 
RESPOSTA: É a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave 
primária de uma outra tabela.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Excelente!",
    9,
		"005"
);

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1136. Column count doesn't match value count at row 1
O valor não bate com o que está sendo pedido.alter

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movie DROP COLUMN rating;
*/