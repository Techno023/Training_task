var createError = require('http-errors');
const dbcon =  require('./config/dbconn')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var imageRouter = require('./routes/image');
var indexRouter = require('./routes/index');
var mydbRouter = require('./routes/user_get');
var fun = require('./routes/users');
const { JsonWebTokenError } = require('jsonwebtoken');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/images')));

app.use('/', indexRouter);
app.use('/api', fun);
app.use('/getsmydb', mydbRouter);
app.use('/image', imageRouter);
app.use('/user', require('./routes/register'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(9000,(req,res)=>{
  console.log("Running");
})


module.exports = app;
