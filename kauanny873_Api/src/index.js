//Importa o módulo Express
const express = require("express"); //Importa o módulo Express

//Define uma classe para organizar a lógica da aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método route para definir as rotas da Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  //Define as rotas da nossa API
  routes() {
    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res) => {
      res.send({ nome: "Kauanny", idade: "16", cpf: "43726285873" });
    });//Essa rota é usada para verificar se a Api está OK
  }
}

//Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express