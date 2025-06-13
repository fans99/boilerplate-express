let express = require('express');
let bodyParser = require('body-parser');
let app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views//index.html");
});

app.get('/json', function (req, res) {
  let mes;
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    mes = 'HELLO JSON';
  }
  else { mes = 'Hellow json'; }
  res.json({
    "message": mes
  });
});

app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time });
})

app.get('/:word/echo', function (req, res, next) {
  res.send({ echo: req.params.word });
})

app.get('/name', function (req, res) {
  let firstName = req.query["first"];
  let lastName = req.query["last"];
  res.json({ name: firstName + ' ' + lastName });
})



































module.exports = app;