const express = require('express');
const router = express.Router();
const knex = require('../database/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/signup', function(req, res, next) {
  console.log("users.js");
  const errors = []
  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.name || !req.body.name.trim()) errors.push("Name can't be blank");
  if (!req.body.password_hash || !req.body.password_hash.trim()) errors.push("Password can't be blank");
  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
      .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
      .count()
      .first()
      .then(function (result) {
         if (result.count === "0") {
           const saltRounds = 4;
           const passwordHash = bcrypt.hashSync(req.body.password_hash, saltRounds);

           knex('users')
            .insert({
              name: req.body.name,
              email: req.body.email,
              password_hash: passwordHash
            })
            .returning('*')
            .then(function (users) {
              const user = users[0];
              const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

              res.json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: token
              })
            })


         } else {
          res.status(422).json({
            errors: ["Email has already been taken"]
          })
        }
      })
  }
});

module.exports = router;
