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

if (__ISDEV__) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.config.dev');
  const compiler = require('webpack')(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    stats: {
      warnings: false,
      chunkModules: false,
      colors: true
    },
    publicPath: '/assets/'
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.listen(port, '0.0.0.0', () => {
  console.log(chalk.yellow(`Listening localhost:${port}!`));
});
