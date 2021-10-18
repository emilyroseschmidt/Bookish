const bookRepository = require("../repository/bookRepository");

function getAllBooks() {
    return bookRepository.getAllBooks();
}

function getBook() {
    return bookRepository.getBook(isbn);
}




module.exports = {getAllBooks:getAllBooks, getBook:getBook,};