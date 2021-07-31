const router = require('express').Router()

router.get('/',(req, res) =>{
    res.status(200).json({
        message : "WELCOME TO MYZ HOTEL"
    })
})

const UserRoutes = require('./user')
const RoomRoutes = require('./room')
const BookRoutes = require('./book')

router.use('/users', UserRoutes)
router.use('/rooms', RoomRoutes)
router.use('/books', BookRoutes)


module.exports = router