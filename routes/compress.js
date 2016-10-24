var express = require('express');
var router = express.Router();
var sanitizeHtml = require('sanitize-html');

/* POST compress html */
router.post('/', function(req, res) {

  var html = req.body.html;
  var clean = sanitizeHtml(html, {
    transformTags: {
      'div': 'p',
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

  res.json({ source: html, clean: clean });
});

module.exports = router;
