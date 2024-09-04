module.exports = class controllerNumbers {
    //Cadastro de professor
    static async checkPar(req, res) {
      const {numero} = req.body;
      if (numero % 2 == 0) {
        res.status(400).json({ message: "Número Par" });
      } else {
        res.status(200).json({message: "Número Impar"});
      }
    }
  };