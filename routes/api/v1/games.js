var express = require("express");
var router = express.Router();
var Game = require('../../../models').Game;

/* GET all games */
router.get("/", function(req, res, next) {
  Game.findAll()
  .then(games => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(games));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

router.get("/:id", function(req, res, next) {
  Game.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(games => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(games));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

/* POST new game */
router.post("/", function(req, res, next) {
  Game.create({
    title: req.body.title,
    price: req.body.price,
    releaseYear: req.body.releaseYear,
    active: req.body.active
  })
  .then(games => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify(games));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

module.exports = router;
