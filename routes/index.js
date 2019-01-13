/* eslint-disable eol-last */
var express = require('express');
var router = express.Router();

// Require controller modules
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/auth/google/callback ', indexController.login);
module.exports = router;