function loggedUserDataMiddleware(req, res , next){


    //Verifica se tem um usuário logado na sessão
    //Se sim define a propriedade res.locals.isLogged como true

    res.locals.isLogged = false
   
    if(req.session.userLogged){
        res.locals.isLogged = true
     }
    next()
}

module.exports = loggedUserDataMiddleware