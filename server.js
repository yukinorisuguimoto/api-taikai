const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const database       = require('./app/config/db');
const app            = express();
const middleware     = require('./app/middleware')(app)
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(database.url, (err, database) => {
    if (err) return console.log(err)
    
    const db = database.db("Taikai");

    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });               
})
// app.listen(port, () => {
//   console.log('We are live on ' + port);
// });