/* EXERCÍCIO 1 

a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
RESPOSTA: O construtor pode receber parâmetros como os atributos dessa classe e são chamados dentro da classe, como função e tipando cada atributo que está
dentro do objeto da classe.

b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem 
"Chamando o construtor da classe User" foi impressa no terminal?

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

RESPOSTA: A cada novo usuário que você vai criando, a mensagem vai sendo mostrada proporcionalmente no terminal.

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  // private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;

}

public getCpf(): string {
    return this.cpf;
}
public getName(): string {
    return this.name;
}
public getAge(): number {
    return this.age
}
}

new UserAccount("095.107.864-03", "Giovanna", 28);

c) Como conseguimos ter acesso às propriedades privadas de uma classe?
RESPOSTA: Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this).

EXERCÍCIO 2
Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. Ela deve conter as mesmas propriedades: data, valor e descrição. 
Agora, porém, todas elas devem ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe quanto para a classe 
UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount.

type Transaction = {
  description: string,
  value: number,
  date: string
}

RESPOSTA: 
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date,
        this.value = value,
        this.description = description
    }
}

EXERCÍCIO 3
Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades accounts, privada (crie os getters 
e setters que achar apropriado).

RESPOSTA: 
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }
*/
