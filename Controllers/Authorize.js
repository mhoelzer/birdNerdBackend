const express = require("express")
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize")
const jwt = require("jsonwebtoken");
const router = express.Router();

const { User } = require("../Models")


// register a new user
router.post("/register", (req, res) => {
    const { username, password } = req.body;
    // console.log(username, password)
    User.create({
      username,
      password
    })

    

    .then(user =>
        res.json({
            username: user.get("username"),
            password: user.get("password")
        }) )
     .catch(error => {
        if (error instanceof Sequelize.ValidationError) {
          return res.status(400).send({ errors: error.errors });
        }
        console.error(error);
        res.status(500).send();
      });
});

router.post("/login", (req, res) => {
    const { username, password} = req.body;
    User.scope(null)
        .find({ where: { username } })
        // .then((User) => {
        //     console.log(User);
        // })
        .then(User => {
            if (User && password === User.get("password")) {
                const payload = { id: User.get('id'), }
                console.log(password)
                res.json({ id: payload.id, username, password, success: true })
            } else {
                res.json({ success: false })
            }
        })

})

router.post("/logout", (req, res) => {
    req.getlogout();
    res.json({ success: true, message: 'logged out', })
})

router.get("/", (req, res) => {
    // res.send(console.log(User));
})


module.exports = {
    router
}