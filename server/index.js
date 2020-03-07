const express = require('express'); // import express
const bodyParser = require('body-parser'); // import body-parser
const mongoose = require('mongoose');
require('./models/Projects'); // import in User model schema, so it executes
require('./models/Users'); // import in Survey model schema, so it executes
const MONGO_URI =
  'mongodb://ryandunton:Gobroncos15!@ds253418.mlab.com:53418/dunton-portfolio';

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => {
    console.log('connected to Mongolab');
  })
  .on('error', err => console.log('Error connecting to Mongolab', err));

const app = express();

app.use(bodyParser.json());

require('./routes/adminRoutes')(app);
require('./routes/projectRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // EXPRESS will serve up production assets like our main.js or main.css file
  // handles from react router
  app.use(express.static('client/build'));
  // EXPRESS will serve up the index.html file if it doesnt recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Listening on', PORT);
});
