var express = require('express');
var router = express.Router();
var low = require('lowdb');
var sanitizeHtml = require('sanitize-html');

var db = low('db.json');

router.get('/', function(req, res) {

  // Response all compress documents
  res.json(db.get('descompress').value());
});

/* POST compress html */
router.post('/', function(req, res) {

  var htmlTranslate = '';

  var item = db.get('compress')
    .find({ id: req.body.id })
    .value();

  if (item) {

    var position = 0;
    var translates = [];

    // Html source
    var html = req.body.html;
  }

  res.json({ html: html });
});

module.exports = router;
