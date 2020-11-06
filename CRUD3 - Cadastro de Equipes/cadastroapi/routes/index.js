var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('CRUD 3');
});

router.get('/teste', function(req, res, next) {
  res.send('teste');
});

module.exports = router;
