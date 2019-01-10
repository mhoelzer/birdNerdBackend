const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();

const { User } = require("../Models")


// register a new user
router.post("/register", (req, res) => {
    const { username, displayName, password } = req.body;
    User.create({
      username,
      displayName,
      password
    })

    .then(user =>
        res.json({
            username: user.get("username"),
            displayname: user.get("displayname"),
            password: user.get("password")
        })
    ) .catch(error => {
        if (error instanceof Sequelize.ValidationError) {
          return res.status(400).send({ errors: error.errors });
        }
        console.error(error);
        res.status(500).send();
      });
});

router.post("/login", (req, res) => {
    const { username, password, displayname } = req.body;
    User.scope(null)
        .find({ where: { username } })
        .then(User => {
            if (password === User.get("password")) {
                const payload = { id: User.get('id'), }
                console.log(password)
                res.json({ id: payload.id, username, displayname, password, success: true })
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
    res.send(console.log(User));
})


module.exports = {
    router
}