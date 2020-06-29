const express = require("express"),
  router = express.Router();
const mongoose = require("mongoose"),
  User = mongoose.model("User");
const bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  { jwtSecret } = require("../config/key");
const verifyLogin = require("../controller/verifyLogin");

//SignUp route for a new user
router.post("/signup", (req, res) => {
  // console.log(req.body)
  const { firstname, lastname, email, password, picture } = req.body;
  if (!email || !password || !firstname || !lastname) {
    return res.status(422).json({ error: "Add Proper Credentials" });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(422).json({ error: "User already Exists" });
      }
      bcrypt
        .hash(password, 11)
        .then((hashedpassword) => {
          const person = new User({
            firstname,
            lastname,
            email,
            password: hashedpassword,
            picture,
          });
          person
            .save()
            .then((user) => {
              res.json({ message: `Welcome to ReactHub ${user.firstname}` });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

//login Route for a new user
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Invalid Credentials" });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      bcrypt
        .compare(password, user.password)
        .then((isValid) => {
          if (isValid) {
            const token = jwt.sign({ _id: user._id }, jwtSecret);
            const {
              _id,
              firstname,
              email,
              lastname,
              picture,
              followers,
              following,
            } = user;
            res.json({
              token,
              message: `Login Successful, Welcome back ${user.firstname}😃`,
              user: {
                _id,
                firstname,
                email,
                lastname,
                followers,
                following,
                picture,
              },
            });
            console.log(`Welcome ${user.firstname}`);
          } else {
            return res.status(422).json({ error: "Something went wrong :(" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;

/*

// testing routes
router.get('/', (req, res) => {
   res.send('Get route Check')
})
*/
