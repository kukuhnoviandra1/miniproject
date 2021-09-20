const BookRoute = require('express').Router()
const BookControllers = require('../controllers/BookControllers')

BookRoute.get('/',BookControllers.bookRoomsPage)
BookRoute.get('/booking',BookControllers.bookingRoomsPage)
BookRoute.post('/booking',BookControllers.bookRooms)
BookRoute.get('/delete/:id',BookControllers.deleteBook)

module.exports = BookRoute;