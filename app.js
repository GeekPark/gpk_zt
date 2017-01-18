const express = require('express');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');

const app = express();
const __ISDEV__ = app.locals.ISDEV = app.get('env') === 'development';
const port = process.env.PORT || '3000';

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'pug');

_.extend(app.locals, require('./app/helps'));

// static directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, '0.0.0.0', () => {
  console.log(chalk.yellow(`Listening localhost:${port}!`));
});
