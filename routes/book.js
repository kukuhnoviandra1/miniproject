const BookRoute = require('express').Router()
const BookControllers = require('../controllers/BookControllers')

BookRoute.get('/:id',BookControllers.bookRoomsPageId)
BookRoute.post('/:BookId/book',BookControllers.bookRooms)
// BookRoute.get('/delete/:id',BookControllers.deleteBook)

module.exports = BookRoute;