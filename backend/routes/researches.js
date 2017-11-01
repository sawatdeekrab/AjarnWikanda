var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  let db = req.db.get('researches');
  db.find().then((docs) => { res.status(200).json(docs) },
    (error) => { res.status(500).json({ status: error.message }) })
});

router.get('/:title', function (req, res, next) {
  let db = req.db.get('researches');
  db.find({ title: req.params.title }).then((docs) => { res.status(200).json(docs) },
    (error) => { res.status(500).json({ status: error.message }) })
});

router.put('/', function (req, res, next) {
  let db = req.db.get('researches')
  db.insert({
    title: req.body.title,
    year: req.body.year,
    language: req.body.language,
    publishing: req.body.publishing
  }).then((docs) => { res.status(200).json(docs) },
    (error) => { res.status(500).json({ status: error.message }) })
});

router.delete('/', function (req, res, next) {
  let db = req.db.get('researches')
  db.remove({
    title: req.body.title
  }).then((docs) => { res.status(200).json(docs) },
    (error) => { res.status(500).json({ status: error.message }) })
});

router.patch('/', function (req, res, next) {
  let db = req.db.get('researches')
  db.update({ title: req.body.title }, {
    $set: {
      year: req.body.year,
      language: req.body.language,
      publishing: req.body.publishing
    }
  }).then((docs) => { res.status(200).json(docs) },
    (error) => { res.status(500).json({ status: error.message }) })
});

module.exports = router;
