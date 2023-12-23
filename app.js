var createError = require('http-errors');
const errHandler = require('./middlewares/errorHandler')
var express = require('express');
const session = require('express-session')
var path = require('path');

//var logger = require('morgan');
var expresslayouts = require('express-ejs-layouts')

var homRoutes = require('./routes/home.route');
var empRoutes = require('./routes/employee.route')
var accRoutes = require('./routes/account.route')
var app = express();

app.use(session({ secret: 'secret-key', saveUninitialized: true, resave: true }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(expresslayouts)
app.set('layout', './layouts/layout')

app.use('/', accRoutes)
app.use('/home', homRoutes)
app.use('/employee', empRoutes)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
})

app.use(errHandler)

const PORT = '3200'
app.listen(PORT, () => { console.log(`Server Up and Running on ${PORT}`) })


