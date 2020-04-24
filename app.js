const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const catRouter = require('./src/routes/catRoutes');
const authRouter = require('./src/routes/authRoutes');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

require('./src/config/passport.js')(app);

app.use(morgan('tiny'));
app.use(cookieParser());
app.use(
  session({
    secret: 'shhh',
    resave: true,
    saveUninitialized: true
  })
);

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

app.use('/login', loginRouter);

app.use('/signup', signupRouter);

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

app.use('/auth', urlencodedParser, authRouter);

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
