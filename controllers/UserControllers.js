const { User } = require('../models')

class UserController{
    static async showUsers(req, res){
        try{
            let users = await User.findAll({
                order : [
                    ['id','ASC']
                ]
            })

            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async registerPage(req, res){
        
    }

    static async register(req, res){
        try{
            const {name, age, gender,email} = req.body;
            let user = await User.create({
                name, age, gender,email
            })
            res.status(201).json(user)
        }catch(err){
            res.status(500).json(err)
        }

    }

    static async delete(req, res){
        try{
            const id = +req.params.id
            let hasil = await User.destroy({
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

    static async updatePage(req, res){
        
    }

    static async update(req, res){
        try{
            const id = +req.params.id
            const {name, age, gender,email} = req.body
            let hasil = await User.update({
                name, age, gender,email
            },{
                where: {id}
            })

            hasil[0] === 1 ? res.status(200).json({
                message : `Id ${id} Telah Di Update`
            }) : res.status(404).json({
                message : `Id ${id} Gagal di Update`
            })
        } catch(err){
        res.status(500).json(err)
        
        }
    }

}

module.exports = UserController