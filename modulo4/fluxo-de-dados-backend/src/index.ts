import express, { response } from "express";
import cors from "cors";
import { Produto, arrayDeProdutos } from "./data";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

//EXERCÍCIO 1
//http://localhost:3003/test
app.get("/test", (request, response) => {
  response.send("Deu tudo certo! Está funcionando!");
});

//EXERCÍCIO 3
//http://localhost:3003/adicionarProduto
app.post("/adicionarProduto", (request, response) => {
  const { name, price } = request.body;
  const novoProduto = {
    id: arrayDeProdutos.length + 1,
    name: name,
    price: price,
  };

  arrayDeProdutos.push(novoProduto);

  response.status(201).send(arrayDeProdutos);
});

//EXERCÍCIO 4
//http://localhost:3003/retornaProdutos
app.get("/retornaProdutos", (request, response) => {
  response.send(arrayDeProdutos);
});

//EXERCÍCIO 5
//http://localhost:3003/editarProduto
app.put("/editarProduto", (request, response) => {
  const {price} = request.body

  response.status(201).send(price);
})

//EXERCÍCIO 6
app.delete("/apagarProduto", (request, response) =>{
  const apagarProduto = request.body

  const apagaProduto:Produto[] = arrayDeProdutos.filter((produtos) =>{
    return produtos.
  })
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
