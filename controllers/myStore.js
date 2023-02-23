const database = require("../database/models");

function myStore(req, res) {

  res.render('myStore')

};
/*
Função para salvar um livro no banco de dados

*/

function addBook(req, res) {



  let id = req.session.userLogged.id

  const {
    title_book,
    category,
    tipo,
    description,
    autor,
    editora,
    ano_edicao,
    numero_edicao,
    acabamento,
    idioma,
    numero_paginas,
    condicao_livro,
    tipo_anuncio,
    preco,
    quantidade,

  } = req.body

  database.Books.create({
    USERS_ID: id,
    TITLE_BOOK: title_book,
    CATEGORY: category,
    TIPO: tipo,
    DESCRIPTION_BOOK: description,
    AUTOR: autor,
    EDITORA: editora,
    ANO_EDICAO: ano_edicao,
    NUMERO_EDICAO: numero_edicao,
    ACABAMENTO: acabamento,
    IDIOMA: idioma,
    NUMERO_PAGINAS: numero_paginas,
    condicao_book: condicao_livro,
    tipo_anuncio: tipo_anuncio,
    PRICE: preco,
    QTDE: quantidade,
    image:  `/uploads/${req.session.userLogged.USER_NAME}/${req.files[0].filename}`

  }).then((data) => {


    let fileLocation = ""
    let galeria = []

    for (let i = 0; i < req.files.length; i++) {
      galeria.push(req.files[i].filename)
      fileLocation = `/uploads/${req.session.userLogged.USER_NAME}/${galeria[i]}`;
      //Logo depois de salvar o livro no banco ele pega o id do livro e 
      // salva a galeria de imagens do livro salvo 
      database.Galery_Books.create({
        book_id: data.dataValues.id,
        image: fileLocation
      })

    }
  })






  return res.redirect("/myStore");
}


module.exports = { myStore, addBook };