const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

function validateUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("login", {
            errors: errors.array(),
            data: {
                email: req.body.email,
                password: req.body.password
            },
        });
    };

    next();
};

const fieldsValidation = [
    body("email").isEmail().withMessage("Você precisa digitar o email!"),
    body("password")
        .notEmpty()
        .withMessage("Você precisa digitar a senha!")
        //.isLength({ min: 8 })
        .withMessage("Você digitou seu e-mail ou senha ERRADO!")
];


function validateToken(req, res, next) {
    
    const { token } = req.cookies;
    // Se não tiver token, redireciona para a página de login
   
    if (!token) {
        return res.redirect("/login");
    };

    // Se o token for inválido, redireciona para a página de login
    try {
        const decoded = jwt.verify(token, jwtKey);
        console.log(decoded);
    } catch (error) {
        res.cookie("token", "");
        return res.redirect("/login");
    };

    // Se tiver token e o token for válido, deixa continuar

    next();
};

module.exports = {
    validateUser,
    fieldsValidation,
    validateToken,
};