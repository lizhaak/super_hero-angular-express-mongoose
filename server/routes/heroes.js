var express = require("express");
var router = express.Router();
var Hero = require('../models/hero');

// return all heroes from database
router.get('/', function(req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heroes);
  });
});

// add new hero to database
router.post('/', function (req, res) {
  console.log('POST re.body: ', req.body);
  var hero = Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);  // Hero has been created
  });
});

// delete hero from database
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
