const { Room, Book } = require('../models')

class RoomController{
    static async showRooms(req, res){
        try{
            let rooms = await Room.findAll({
                order : [
                    ['id','ASC']
                ]
            })
            res.render('./showRoomPage.ejs',{rooms})
        }catch(err){
            res.status(500).json(err)
        }
    }
    static async addRooms(req, res){
        try{
            const {name, type} = req.body;
            let room = await Room.create({
                name, type
            })
            res.status(201).json(room)
        }catch(err){
            res.status(500).json(err)
        }

    }
    static async delete(req, res){
        try{
            const id = +req.params.id
            let hasil = await Room.destroy({
                where: {id}
            })
            hasil === 1 ? res.status(200).json({
                message : `Id ${id} Telah di hapus`
            }) : res.status(404).json({
                message : `Id ${id} Gagal DI hapus`
            })
        }catch(err){
            res.status(500).json(err)
        }

    }
    static async update(req,res){
        try{
            let id =  +req.params.id
            let result = await Room.update({
            status: 'Available'
            },{
                where : {id}
            })
            let tempBook = await Book.destroy({
                where : {RoomId:id}
            })
            res.redirect('/rooms')

        }catch(err){
            res.status(500).json(err)
        }
    }

}

module.exports = RoomController