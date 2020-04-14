const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const loginRouter = express.Router();
const catRouter = require('./src/routes/catRoutes');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist'))
);
app.set('views', './src/views');
app.set('view engine', 'ejs');

loginRouter.route('/').get((req, res) => {
  res.send('Loginarama');
});

loginRouter.route('/user').get((req, res) => {
  res.send('Hello User');
});

app.use('/login', loginRouter);

app.get('/');

app.get('/', (req, res) => {
  res.render('index', {
    nav: [
      { link: '/login', title: 'LogIn' },
      { link: '/SignUp', title: 'Sign Up' }
    ],
    title: { link: '/', title: 'Cat Match' }
  });
});

app.use('/shortlist', urlencodedParser, catRouter);

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
