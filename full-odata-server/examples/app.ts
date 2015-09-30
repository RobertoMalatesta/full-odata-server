var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var odataServer = require('../');
var server = new odataServer.ODataServer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.setMongoDb('mongodb://localhost/ODataApp');

var author = require('./models/author');
server.addModel('Author', author.model);
var category = require('./models/category');
server.addModel('Category', category.model);
var book = require('./models/book');
server.addModel('Book', book.model);

app.use('/api', server.getRouter());

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});