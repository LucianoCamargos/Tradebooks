const express = require('express');
const router = express.Router();

const controller = require("../controllers/myStore")
const multerUpload = require("../config/multer")
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

/* GET home page. */
router.get('/',/* notLoggedUserMiddleware*/controller.myStore);

router.post('/cadastrarBook', multerUpload.array("file[]"), controller.addBook)
module.exports = router;
