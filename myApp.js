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
    "message": mes
  });
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
})

app.get('/:word/echo', function(req, res, next) {
  res.send({ echo: req.params.word });
})

app.use('/public', express.static(__dirname + '/public'));




































module.exports = app;