const jwt = require('jsonwebtoken'),
   { jwtSecret } = require('../config/key'),
   mongoose = require('mongoose'),
   User = mongoose.model('User');

module.exports = (req, res, next) => {
   const { authorization } = req.headers;
   if (!authorization) {
      res.status(401).json({ error: "You've got to Login" })
   }
   const token = authorization.replace('Bearer ', "");
   jwt.verify(token, jwtSecret, (err, payload) => {
      if (err) {
         return res.status(403).json({ error: 'Access Denied' })
      }
      const { _id } = payload
      User.findById(_id).then(record => {
         req.user = record,
            next()
      })
   })

}