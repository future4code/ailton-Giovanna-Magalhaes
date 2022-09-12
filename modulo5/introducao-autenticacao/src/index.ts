import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

app.post("/user/signup", async (req: Request, res: Response) => {
   try {
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
       throw new Error("Invalid email");
     }
 

     if (!req.body.password || req.body.password.length < 6) {
       throw new Error("Invalid password");
     }
 
     const userData = {
       email: req.body.email,
       password: req.body.password,
     };
 
     const id = generateId();
 
   
     await createUser(id, userData.email, userData.password);
 
     const token = generateToken({
       id,
     });
 
     res.status(200).send({
       token,
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });


 const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});