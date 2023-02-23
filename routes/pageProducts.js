let express = require('express');
let router = express.Router();

const controller = require("../controllers/pageProducts")



router.get('/', controller.pageProducts);



module.exports = router;