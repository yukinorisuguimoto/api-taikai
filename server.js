const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const database       = require('./app/config/db');
const app            = express();
const mongoose       = require('mongoose');
const models         = require('./app/models');
const middleware     = require('./app/middleware')(app)
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(database.url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  require('./app/routes')(app, db);

  console.log(models.area(2));
  console.log(models.test);

  app.listen(port, () => {
      console.log('We are live on ' + port);
  });

});

// MongoClient.connect(database.url, (err, database) => {
//     if (err) return console.log(err)
    
//     const db = database.db("Taikai");

//     require('./app/routes')(app, db);

//     app.listen(port, () => {
//         console.log('We are live on ' + port);
//     });               
// })
