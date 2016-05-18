const express = require('express');
const router = express.Router();
const knex = require('../database/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', function(req, res, next) {
  console.log(req.body);
  return knex('users')
    .where({email: req.body.email})
    .first()
    .then(function (result) {
      if (result) {
        if (bcrypt.compareSync(req.body.password, result.password_hash)) {
          res.json({token: jwt.sign({ id: result.id }, process.env.JWT_SECRET)})
        } else {
          res.status(422).send({})
        }
      } else {
        res.status(422).send({})
      }
    })
});


module.exports = router;
