const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const logger = require('morgan');
const methodOveride = require('method-override')
const loggedUserDataMiddleware = require('./middlewares/loggedUserDataMiddleware')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userProfileRouter = require('./routes/userProfile');
const productRouter = require('./routes/product');
const loginCreate = require('./routes/login');
const pageProducts = require('./routes/pageProducts')
const myStore = require('./routes/myStore')
const pageCart = require('./routes/pageCart')




const app = express();

//session
app.use(session({
  secret:"senhamuitosecreta",
  resave: false,
  saveUninitialized: false,
}))

//habilitar metodo put e delete
app.use(methodOveride('_method'))

app.use(loggedUserDataMiddleware)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//minhas rotas

app.use("/", indexRouter);
app.use("/userProfile", userProfileRouter);
app.use("/product", productRouter);
app.use("/login", loginCreate);
app.use("/users", usersRouter);

app.use('/pageProducts', pageProducts)
app.use('/myStore', myStore)
app.use('/pageCart', pageCart)




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;