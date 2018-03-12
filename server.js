const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const database       = require('./app/config/db');
const app            = express();
const middleware     = require('./app/middleware')(app)
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const { exec } = require('child_process');
exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

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