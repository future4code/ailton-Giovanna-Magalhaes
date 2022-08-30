import express from "express";
import cors from "cors";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

//EXERCÍCIO 1
// http://localhost:3003/primeira-resposta
// app.get("/primeira", (request, response)=>{
//     response.status(200).send("Seja Bem Vindo(a)!")
// })

//EXERCÍCIO 2
//http://localhost:3003/usuarios
// app.get("/usuarios", (request, response) => {
//     const pessoa = request.body;
//     response.send(pessoa);
//     console.log(pessoa)
// });

//EXERCÍCIO 3
//http://localhost:3003/usuarios
// app.get("/usuarios-novos", (request, response) => {
//   const pessoa = request.body;
//   type pessoaType = {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   };
//   const arrayPessoas: pessoaType[] = [
//     {
//       id: 1,
//       name: "Giovanna",
//       age: 25,
//       email: "giovanna@gmail.com",
//     },
//     {
//       id: 2,
//       name: "Lucas",
//       age: 27,
//       email: "lucas@gmail.com",
//     },
//     {
//       id: 3,
//       name: "Eduardo",
//       age: 27,
//       email: "eduardo@gmail.com",
//     },
//     {
//       id: 4,
//       name: "Camila",
//       age: 30,
//       email: "camila@gmail.com",
//     },
//   ];
//   response.send(arrayPessoas);
// });

//EXERCÍCIO 4
// http://localhost:3003/usuarios/:name
// app.get("/usuarios/:name", (request, response) => {
// const nameUser = request.params.name
// console.log(nameUser)
// });


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
