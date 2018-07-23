/*
**  Author:  Sarbojit Mukherjee
**  Description: The main server side landing program for Express
**  Time Frame: June 2018.
*/
// Load needed libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Load user model (for registration & auth)
require('./models/common/User');

// Load Routes
const users = require('./routes/api/users');
const auth = require('./routes/auth');

// Load Keys
const keys = require('./config/keys');

// Initialize the engine - Express
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB config
const db = require('./config/keys').mongoURI;
// // DB Connection
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Logged into MLab URI = ${db}`))
  .catch(err => console.log('Error Mongo : ' + err));

// ================= PASSPORT MIDDLEWARE ========================
app.use(passport.initialize());
// Passport Config - JWT strategy
require('./config/passport')(passport);

app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);
//=============== Server STATIC ASSETS if in production ========
if (process.env.NODE_ENV === 'production') {
  // Set a static folder and point to client side, build as
  app.use(express.static('client/build'));
  //app.use('/static', express.static(path.join(__dirname, 'client/build')));
  // client is the client-directory or client-side and 'build' is the build
  // directory created via building the client side (check client build in deploy doc)
  // In reality, we would ask heroku to do the build and not locally build it
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Baand server (power by ma-babi) running on port ${port}`);
});
