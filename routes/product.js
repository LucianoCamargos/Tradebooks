let express = require('express');
let router = express.Router();

const controller = require("../controllers/product")



router.get('/', controller.pageProduct);



module.exports = router;