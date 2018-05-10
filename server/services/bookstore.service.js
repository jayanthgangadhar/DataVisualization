var app = require('../../express');
// var app = express();
var BookStoreModel = require('../models/bookStore.model');
// module.exports = function (app, bookModel) {
app.get('/api', findAllBooks);

function findAllBooks(req, res) {
    console.log("client service")
        // BookStoreModel
        //     .findAllBooks()
        //     .then(function (books) {
        //         res.json(books);
        //         }, function (err) {
        //             res.sendStatus(500).send(err);
        //     });
}
