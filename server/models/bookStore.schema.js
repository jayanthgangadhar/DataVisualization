var mongoose = require("mongoose");

var bookStoreSchema = mongoose.Schema({

        id: String,
        isbn: String,
        title: String,
        cost: Number,
    author: {
        id: String,
        name: String
    },
    publisher: {
        id: String,
        name: String
    },
}, {collection: 'bookStore'});

module.exports = bookStoreSchema;
