const database = require('../database/models');
const bcrypt = require("bcrypt");


//função para renderizar página de usuário
function userProfile(req, res) {



  let id = req.session.userLogged.id





  database.Address.findAll({
    where: {
      USERS_ID: id
    }
  }).then((data) => {
    let myAddress = data
    console.log(myAddress)
    console.log(id)
    database.Pedidos.findAll({ where: { USERS_ID: id } }).then((data) => {
      let pedidos = data

      res.render('userProfile', {
        //crio variavel para receber dados da sessão e usar na minha página
        userLogged: req.session.userLogged,
        myAddress, pedidos
      })
    })
  });
};

//criação de usuário
// Usando async para configura o Bcrypt da senha
function createUser(req, res) {
  let { name, user_name, email, password } = req.body;

  //cryptogradando as senha dos users
  const passwordBcrytp = bcrypt.hashSync(password, 10);

  database.User.create({
    FULL_NAME: name,
    USER_NAME: user_name,
    EMAIL: email,
    UPASSWORD: passwordBcrytp,
    charset: 'utf8mb4'
  });
  return res.redirect("/login");
};

function updateUser(req, res) {
  //receve id do usuario que está salvo na sessão
  let id = req.session.userLogged.id
  let { name, user_name, dataNascimento, cpf, sexo, telefone } = req.body;

  database.User.update({
    FULL_NAME: name,
    USER_NAME: user_name,
    BIRTH_DATE: dataNascimento,
    CPF: cpf,
    SEXO: sexo,
    TEL: telefone,
  },
    {
      where: {
        id,
      }
    }).then((data) => {
      req.session.userLogged = data.dataValues
      res.redirect("/userProfile");
    })


}

function deleteUser(req, res) {

  let { id } = req.body;

  database.User.destroy({ where: { id, } })


}

//Adicionar endereço 
function addAddress(req, res) {
  let id = req.session.userLogged.id
  let { cep, rua, numero, complemento, bairro, cidade, estado } = req.body
  database.Address.create({
    USERS_ID: id,
    CEP: cep,
    RUA: rua,
    NUMERO: numero,
    BAIRRO: bairro,
    CIDADE: cidade,
    ESTADO: estado,
    COMPLEMENTO: complemento,
  })
  return res.redirect('/userProfile')

}

function updateAddress(req, res) {
  let { id } = req.params

  let { cep, rua, numero, complemento, bairro, cidade, estado } = req.body
  database.Address.update({
    CEP: cep,
    RUA: rua,
    NUMERO: numero,
    BAIRRO: bairro,
    CIDADE: cidade,
    ESTADO: estado,
    COMPLEMENTO: complemento,
  },
    {
      where: {
        id,
      }
    });

  return res.redirect('/userProfile')

}


//deletar endereço
function deleteAddress(req, res) {

  let { id } = req.params;


  database.Address.destroy({ where: { id, } })



  return res.redirect('/userProfile')



}






module.exports = {
  userProfile,
  createUser,
  updateUser,
  deleteUser,
  addAddress,
  deleteAddress,
  updateAddress


};