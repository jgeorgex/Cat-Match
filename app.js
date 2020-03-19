const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const loginRouter = express.Router();

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

app.get('/', (req, res) => {
  res.render('index', {
    nav: [
      { link: '/login', title: 'LogIn' },
      { link: '/SignUp', title: 'Sign Up' }
    ],
    title: 'Cat Match'
  });
});

app.post('/shortlist', urlencodedParser, (req, res) => {
  res.send(req.body);
  debug(req.body);
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
