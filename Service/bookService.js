const bookRepository = require("../repository/bookRepository");

function getAllBooks() {
    return bookRepository.getAllBooks();
}

module.exports = {getAllBooks:getAllBooks};