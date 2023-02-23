const multer = require("multer");

const fs = require('fs');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    //Cria uma pasta com o nome do usuário para poder 
    //inserir as imagens numa pasta com o nome do usuário que estiver logado
    const dir = `public/uploads/${req.session.userLogged.USER_NAME}`;

    //Verifica se não existe
    if (!fs.existsSync(dir)) {
      //Efetua a criação do diretório
      fs.mkdir(dir, (err) => {
        if (err) {
          console.log("Deu ruim...");
          return
        }

        console.log("Diretório criado! =)")
      });
    }
    cb(null, `public/uploads/${req.session.userLogged.USER_NAME}`);
  },
  filename: function (req, file, cb) {
    cb(null, "book-" + Date.now() + ".jpeg");
  },
});
const upload = multer({ storage: storage });

module.exports = upload;