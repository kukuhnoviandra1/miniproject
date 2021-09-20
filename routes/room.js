const RoomRoute = require('express').Router()
const RoomControllers = require('../controllers/RoomControllers')

RoomRoute.get('/',RoomControllers.showRooms)
RoomRoute.post('/add',RoomControllers.addRooms)
RoomRoute.get('/delete/:id',RoomControllers.delete)
RoomRoute.get('/update/:id',RoomControllers.update)

module.exports = RoomRoute;