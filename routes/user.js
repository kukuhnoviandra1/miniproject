const UserRoute = require('express').Router()
const UserControllers = require('../controllers/UserControllers')

UserRoute.get('/',UserControllers.showUsers)
UserRoute.get('/register',UserControllers.registerPage)
UserRoute.post('/register',UserControllers.register)
UserRoute.get('/delete/:id',UserControllers.delete)
UserRoute.get('/update/:id',UserControllers.updatePage)
UserRoute.post('/update/:id',UserControllers.update)

module.exports = UserRoute;