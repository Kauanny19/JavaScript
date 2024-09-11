//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require('../controllers/controllerNumbers');
//Importa a controller onde contém a lógica relacionada a professores
const teacherController = require('../controllers/teacherController');

//Rota POST para '/teacher'
router.post('/teacher/', teacherController.postTeacher);
router.get('/teacher/', teacherController.getTeacher);

router.post('/par/', controllerNumbers.checkPar);
router.post('/primo/', controllerNumbers.checkPrimo);

module.exports = router
