//função para renderizar página de produto
function pageProduct(req, res) {
  res.render('product', {userLogged: req.session.userLogged })
};


module.exports = { pageProduct,  };