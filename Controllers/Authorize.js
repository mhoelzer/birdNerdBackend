const express = require("express");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { User } = require("../Models");

// register a new user
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  let hashedPassword = bcrypt.hashSync(password, 10); // stops js from executing
  // console.log(username, password)
  User.create({
    username,
    password: hashedPassword
  })
    .then(user => {
      res.json({
        username: user.get("username")
      });
    })
    .catch(error => {
      if (error instanceof Sequelize.ValidationError) {
        return res.status(400).send({ errors: error.errors });
      }
      console.error(error);
      res.status(500).send();
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.scope(null)
    .find({ where: { username } })
    // .then((User) => {
    //     console.log(User);
    // })
    .then(User => {
      if (User) {
        if (bcrypt.compareSync(password, User.get("password"))) {
          let token = jwt.sign({username: User.get("username")}, process.env.JWT_SECRET, {
            expiresIn: "24h"
          });
          const payload = { id: User.get("id") };
          console.log(password);
          res.json({ id: payload.id, username, success: true, token });
        } else {
          res.json({ success: false }); // could add more detail about the password error
        }
      } else {
        res.json({ success: false });
      }
    });
});

router.post("/logout", (req, res) => {
//   req.getlogout();
  try {
    jwt.verify(req.headers.authorization.replace("Bearer ", ""), process.env.JWT_SECRET); 
  } catch (err) {
    return res.status(401).send();
  }
  res.json({ success: true, message: "logged out" });
});

router.get("/", (req, res) => {
  // res.send(console.log(User));
});

module.exports = {
  router
};
