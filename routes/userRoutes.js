const express = require('express'),
   router = express.Router();
const mongoose = require('mongoose'),
   User = mongoose.model('User');
const bcrypt = require('bcryptjs'),
   jwt = require('jsonwebtoken'),
   { jwtSecret } = require('../config/key')
const verifyLogin = require('../controller/verifyLogin');

//Verify Login check
router.get('/secret', verifyLogin, (req, res) => {
   res.send('Hello Chu***e')
})

//SignUp route for a new user
router.post('/signup', (req, res) => {
   // console.log(req.body)
   const { firstname, lastname, email, password } = req.body
   if (!isEmail(email) || !isOK(password) || !firstname || !lastname) {
      return res.status(422).json({ error: 'Add Proper Credentials' });
   }
   User.findOne({ email: email })
      .then((user) => {
         if (user) {
            return res.status(422).json({ error: 'A user with the same email already exists.' })
         }
         bcrypt.hash(password, 11)
            .then(hashedpassword => {
               const person = new User({
                  firstname,
                  lastname,
                  email,
                  password: hashedpassword
               })
               person.save()
                  .then(user => {
                     res.json({ Success: `Welcome to ReactHub ${user.firstname}` })
                  })
                  .catch(err => console.log(err))
            }).catch(err => console.log(err))

      }).catch(err => console.log(err))
})

//login Route for a new user
router.post('/login', (req, res) => {
   const { email, password } = req.body;
   if (!isEmail(email) || !password) {
      return res.status(422).json({ error: 'Invalid Credentials' })
   }
   User.findOne({ email: email })
      .then(user => {
         if (!user) {
            return res.status(404).json({ error: 'User not found' })
         }
         bcrypt.compare(password, user.password)
            .then(isValid => {
               if (isValid) {
                  const token = jwt.sign({ _id: user._id }, jwtSecret);
                  res.json({ token, message: `Login Successful, Welcome back ${user.firstname}😃` });
                  console.log(`Welcome ${user.firstname}`)
               } else {
                  return res.status(422).json({ error: 'Something went wrong :(' })
               }
            })
            .catch(err => {
               console.log(err);
            })
      }).catch(err => console.log(err))
})

//Email Validation Function   
const isEmail = (email) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase())
}
//Password validation
const isOK = (password) => {
   if (!password || password.length > 20 || password.length < 6) {
      return false;
   }
   return true;
}

module.exports = router

/*

// testing routes
router.get('/', (req, res) => {
   res.send('Get route Check')
})
*/