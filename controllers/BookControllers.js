const { User, Room, Book } = require("../models");

class BookController {
  static bookRoomsPageId(req, res) {
    let id = +req.params.id
    Book.findOne({
      include : [User,Room],
      where : {id}
    })
      .then((books) => {
        res.status(200).json(books);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static async bookRooms(req, res) {
    try {
      const {UserId, RoomId} = req.body;
      let In = new Date()
      let Out= new Date()
      let besok = Out.setDate(Out.getDate() + 2);
      let hasil = await Book.create({
        dateIn:In, dateOut:besok, UserId, RoomId
      })

      res.status(400).json(hasil)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BookController;
