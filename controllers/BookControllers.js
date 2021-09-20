const { User, Room, Book } = require("../models");

class BookController {
  static bookRoomsPage(req, res) {
    Book.findAll()
      .then((books) => {
        res.render('./showBookPage.ejs',{books})
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  static async bookingRoomsPage(req, res) {
    res.render("./bookingRoomPage.ejs");
  }
  static async bookRooms(req, res) {
    try {
      const { UserId, RoomId } = req.body;
      let In = new Date();
      let Out = new Date();
      let besok = Out.setDate(Out.getDate() + 2);
      let rooms = await Room.findOne({
        where: { id: RoomId },
      });
      let users = await User.findOne({
        where: { id: UserId },
      });
      if (rooms.status === "Reserved") {
        res.status(500).json({
          message: "Already Reserved",
        });
      } else {
        let hasil = await Book.create({
          dateIn: In,
          dateOut: besok,
          UserId,
          RoomId,
        });
        let upstat = await Room.update(
          {
            status: "Reserved"
          },
          { where: { id: RoomId } }
        );
        res.redirect('/books')
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = +req.params.id;
      let hasil = await Book.destroy({
        where: { id },
      });
      hasil === 1
        ? res.status(200).json({
            message: `Booking Atas Id ${id} Telah di hapus`,
          })
        : res.status(404).json({
            message: `Booking Atas Id ${id} Gagal DI hapus`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BookController;
