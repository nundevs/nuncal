/** node modules import */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');


const app = express();
app.use(express.static('dist'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); // TODO: ayarlari yap
// app.use(session({ // yerinin buasi olmasi onemli
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect('mongodb+srv://admin-ubey:test123123@cluster0-jtqae.mongodb.net/todolistDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// userSchema.plugin(passportLocalMongoose);

app.use('/api', indexRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
