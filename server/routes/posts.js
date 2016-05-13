var express = require('express');
var router = express.Router();
var knex = require('../database/db.js');

router.get('/posts', function(req, res, next) {
  knex('posts').then(function(response){
    res.json(response);
  })
});

module.exports = router;
