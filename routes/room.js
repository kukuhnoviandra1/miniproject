const RoomRoute = require('express').Router()
const RoomControllers = require('../controllers/RoomControllers')

RoomRoute.get('/',RoomControllers.showRooms)
RoomRoute.post('/add',RoomControllers.addRooms)
RoomRoute.post('/delete/:id',RoomControllers.delete)

module.exports = RoomRoute;