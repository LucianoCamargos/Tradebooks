const {body, validationResult} = require('express-validator')

function validateUser(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.array(),
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      });
    }
next()
}

const fieldsValidation = [
body("name")
.notEmpty().withMessage("Precisa digitar seu o nome"),

body("email").isEmail().withMessage("Você precisa digitar o email"),

body("password")
  .notEmpty()
  .withMessage("Você precisa digitar a senha")
  .isLength({ min: 8 })
  .withMessage("A senha precisa ter pelo menos 8 caracteres"),
];


module.exports = {
  validateUser,
  fieldsValidation
};