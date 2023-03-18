const {
    addBookOnHandler, getAllBooksOnHandler, getBookByIdOnHandler, editBookByIdOnHandler, deleteBookByIdOnHandler
} = require('./handler');

const routes = [
    // post
    {
        method: 'POST',
        path: '/books',
        handler: addBookOnHandler
    },
    // getAll
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksOnHandler
    },
    // getById
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdOnHandler
    },
    // put
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdOnHandler
    },
    // delete
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdOnHandler
    }
];

module.exports = routes;
