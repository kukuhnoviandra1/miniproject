const { User } = require("../models");

class UserController {
  static async showUsers(req, res) {
    try {
      let users = await User.findAll({
        order: [["id", "ASC"]],
      });

      res.render("./showUserPage.ejs", { users });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async registerPage(req, res) {
    res.render("./userRegisterPage.ejs");
  }

  static async register(req, res) {
    try {
      const { name, age, gender, email } = req.body;
      let user = await User.create({
        name,
        age,
        gender,
        email,
      });
      res.redirect("/users");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.destroy({
        where: { id },
      });
      res.redirect("/users")
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      let id = +req.params.id;
      let users = await User.findOne({
        where: { id }
      });
      res.render("./userUpdate.ejs", { users });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, age, gender, email } = req.body;
      let users = await User.update(
        {
          name,
          age,
          gender,
          email,
        },
        {
          where: { id },
        }
      );

      res.redirect("/users");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
