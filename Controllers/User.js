const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");

const { Notebook } = require("../Models");

router.get("/notebook", (req, res) => {
  const username = req.params.username;
  Notebook.findAll({ where: { username } })
    .then(notebookEntries => {
      if (notebookEntries === null) {
        return res.json([]);
      }
      res.json(notebookEntries);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send();
    });
});

router.post("/notebook", (req, res) => {
  const username = req.params.username;
  const { birdname, date, details, location } = req.body;
  let decoded;
  try {
    decoded = jwt.verify(
      req.headers.authorization.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
  } catch (err) {
      console.log(req.headers.authorization.replace("Bearer ", ""))
      console.log(process.env.JWT_SECRET)
      console.log(decoded)
      console.log(err)
    return res.status(401).send();
  }
  if (decoded.username !== username) {
      console.log(decoded)
      console.log(username + "this is uername")
    return res.status(401).send();
  }
  Notebook.create({ username, birdname, date, details, location })
    .then(notebookEntry => {
      res.json(notebookEntry);
    })
    .catch(error => {
      if (error instanceof Sequelize.ValidationError) {
        return res.status(400).send({ errors: error.errors });
      }
      console.error(error);
      res.status(500).send();
    });
});

module.exports = router;
