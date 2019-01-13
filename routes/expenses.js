var express = require('express');
var router = express.Router();

// Require controller modules
var indexController = require('../controllers/indexController');

/* GET expenses page. */
router.get('/expenses', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
