var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faq', { title: 'Driving School - FAQ' });
});

module.exports = router;
