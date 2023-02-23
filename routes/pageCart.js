let express = require('express');
let router = express.Router();

const controller = require("../controllers/pageCart")
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

/* GET home page. */
router.get('/',  notLoggedUserMiddleware,controller.pageCart);

router.post('/', controller.createPedido)

module.exports = router;