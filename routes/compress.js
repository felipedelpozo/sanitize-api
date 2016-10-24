var express = require('express');
var router = express.Router();
var low = require('lowdb');
var uuid = require('uuid');
var sanitizeHtml = require('sanitize-html');

var db = low('db.json');

router.get('/', function(req, res) {

  // Response all descompress documents
  res.json(db.get('compress').value());
});

/* POST descompress html */
router.post('/', function(req, res) {

  // Html source
  var html = req.body.html;

  // Clean html
  var clean = sanitizeHtml(html, {
    transformTags: {
      'div': 'd',
      'img': 'i',
      'script': function(tagName, attribs) {
        return {
          tagName: 'i',
          text: ''
        }
      },
      'span': 'b'
    },
    selfClosing: [ 'i' ]
  });

  // Create document object
  var document = { id: uuid(), source: html, clean: clean };

  // Save document to compress collection
  db.get('compress').push(document).value();

  // Return document
  res.json(document);
});

module.exports = router;
