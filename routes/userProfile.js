const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  verifyLogin = require("../controller/verifyLogin");
const Data = mongoose.model("Data"),
  User = mongoose.model("User");

router.get("/user/:id", verifyLogin, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Data.find({ uploadedBy: req.params.id })
        .populate("uploadedBy", "_id firstname lastname email")
        .exec((err, post) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, post });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not Found" });
    });
});

module.exports = router;
