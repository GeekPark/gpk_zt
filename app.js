import express from 'express';
import path from 'path';
import chalk from 'chalk';
import _ from 'lodash';

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
