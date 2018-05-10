var mongoose = require("mongoose");
var bookStoreSchema = require("./bookStore.schema");
var bookStoreModel = mongoose.model("bookStoreModel", bookStoreSchema);

bookStoreModel.findAllBooks = findAllBooks;

module.exports = bookStoreModel;


function findAllBooks() {
    return bookStoreModel.find();
}

