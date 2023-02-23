
const database = require('../database/models');

function pageCart(req, res) {
  let id = req.session.userLogged.id
  database.Address.findAll({
    where: {
      USERS_ID: id
    }
  }).then((data) => {
    let myAddress = data


 res.render('pageCart', {

    userLogged: req.session.userLogged,
    myAddress
  })
  });
  


};

function createPedido(req, res) {



  const id = req.session.userLogged.id

  const { tipoPedido, valorFrete, valorPedido, valorTotal, idAddress,formaPag } = req.body

  database.Pedidos.create({
      TYPE_PEDIDO: tipoPedido,
      //  STATUS_PEDIDO,
      VALOR_FRETE: valorFrete,
      VALOR_PEDIDO: valorPedido,
      VALOR_TOTAL: valorTotal,
      // DATE_PEDIDO,
      FORMA_PAGAMENTO: formaPag,
      USERS_ID: id,
     ADDRESS_ID: idAddress

  }).then((data) => {

      const idPedidos = data.dataValues.id


      let dados = []


      dados.push({ "idBook": req.body.idBook, "qtde": req.body.qtde })

      console.log(dados[0].idBook.length)
      for (let i = 0; i < dados[0].idBook.length; i++) {

          database.Itens.create({
              QTDE: dados[0].qtde[i],
              ID_PEDIDOS: idPedidos,
              BOOKS_ID: dados[0].idBook[i],
          })


          database.Books.findAll({
              where: {
                  ID: dados[0].idBook[i]
              }
          }).then((data) => {
              
              database.Books.update({
                  QTDE: data[0].QTDE - dados[0].qtde[i]

              },
                  {
                      where: {
                          ID: dados[0].idBook[i],
                      }
                  })


          })

          
      }
    
      database.Address.findAll({
        where: {
          USERS_ID: id
        }
      }).then((data) => {
        let myAddress = data
    
    
     res.render('pageCart', {
    
        userLogged: req.session.userLogged,
        myAddress
      })
      });
      })
  
  
}



module.exports = { pageCart, createPedido };