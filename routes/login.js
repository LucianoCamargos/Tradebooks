const express = require('express');
const router = express.Router();
const controller = require("../controllers/login");
const loginMiddleware = require("../middlewares/LoginMiddlewares");
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware')

router.get("/",loggedUserMiddleware, controller.login);
router.post("/",
    loginMiddleware.fieldsValidation,
    loginMiddleware.validateUser,
    controller.autheticateUser,
    );
router.get("/logout", controller.logout)
module.exports = router;