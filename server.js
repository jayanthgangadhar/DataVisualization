var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/bookStore';

mongoose.connect(connectionString);

var db = mongoose.connection;
db.once('open', function() {
    console.log("connected")
});
require("./server/app");

var port = process.env.PORT || 3000;
app.get('/api/book', findAllBooks);
var bookmodel = require('./server/models/bookStore.model')
function findAllBooks(req, res) {
    bookmodel
        .findAllBooks()
        .then(function (books) {
            // console.log(books)
            res.json(books);
            }, function (err) {
                res.sendStatus(500).send(err);
        });
}
app.listen(port);