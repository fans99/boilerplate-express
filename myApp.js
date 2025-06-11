let express = require('express');
let app = express();
require('dotenv').config();
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views//index.html");
});

app.get('/json', function(req, res) {
  let mes;
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    mes = 'HELLO JSON';
  }
  else { mes = 'Hellow json'; }
  res.json({
    "message": process.env
  });
});

app.use('/public', express.static(__dirname + '/public'));




































module.exports = app;