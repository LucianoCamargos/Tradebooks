
const products = require("../database/models")
function index(req, res) {
  products.Books.findAll().then((data) =>{
  
  res.render('index',{userLogged: req.session.userLogged , data })
})
};


module.exports = { index, };