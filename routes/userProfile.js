const express = require('express');
const router = express.Router();
const controller = require("../controllers/userProfile");
const createUserMiddleware = require("../middlewares/userMiddlewares");
const loginMiddleware = require("../middlewares/LoginMiddlewares");
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware');
const { route } = require('./users');

router.get('/',loginMiddleware.validateToken,notLoggedUserMiddleware,  controller.userProfile);


//post para criação de usuário
router.post('/criarNovo',
createUserMiddleware.fieldsValidation, 
createUserMiddleware.validateUser, 
controller.createUser,

)
//atualização ou edição do cadastro do usuário
router.put('/completarCadastro',
    controller.updateUser,
)

//adicionar um eendereço do usuário
router.post('/addAddress', controller.addAddress)

router.delete("/deletarAddress/:id", controller.deleteAddress)
router.put("/editarAddress/:id", controller.updateAddress)
module.exports = router;
