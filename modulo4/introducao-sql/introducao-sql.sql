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
  