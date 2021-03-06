var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());  //what does this do?
app.use('/', index);

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;