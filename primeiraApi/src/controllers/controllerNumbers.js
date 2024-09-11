module.exports = class controllerNumbers {
    //Cadastro de professor
    static async checkPar(req, res) {
      const {numero1} = req.body;
      if (numero1 % 2 == 0) {
        res.json({ message: "Número Par" });
      } else {
        res.json({message: "Número Ímpar"});
      }
    }

    static async checkPrimo(req, res) {
      const { numbers } = req.body;
      if (typeof numbers !== "number") {
        res.status(400).json({ message: "Dados inválidos" });
      }
      for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
          res.status(200).json({ resultado: "Não é um número primo" });
        }
      }
      return res.status(200).json({ resultado: "É um número primo" });
    }
  };