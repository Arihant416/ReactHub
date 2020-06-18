const express = require("express"),
  router = express.Router();
const mongoose = require("mongoose"),
  Data = mongoose.model("Data");
const verifyLogin = require("../controller/verifyLogin");

// Make route to Get all the posts
router.get("/alldata", verifyLogin, (req, res) => {
  Data.find()
    .populate("uploadedBy", "_id firstname lastname email")
    .populate("comments.postedBy", "_id firstname")
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});
//Add a new post
router.post("/newpost", verifyLogin, (req, res) => {
  const { title, content, picture } = req.body;
  if (!title || !content || !picture) {
    return res.status(422).json({ error: "Filling all fields is mandatory" });
  }
  const uploadData = new Data({
    title,
    content,
    picture: picture,
    uploadedBy: req.user,
  });
  uploadData
    .save()
    .then((record) => {
      res.json({ uploaded: record });
    })
    .catch((err) => console.log(err));
});

//Get posts uploaded by the current LoggedIN user
router.get("/mypost", verifyLogin, (req, res) => {
  Data.find({ uploadedBy: req.user._id })
    .populate("uploadedBy", "_id firstname lastname email")
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.log(err));
});

//Get the likes and dislikes
router.put("/like", verifyLogin, (req, res) => {
  Data.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("uploadedBy", "_id firstname lastname email")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});
router.put("/dislike", verifyLogin, (req, res) => {
  Data.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("uploadedBy", "_id firstname lastname email")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/comment", verifyLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Data.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    { new: true }
  )
    .populate("comments.postedBy", "_id firstname lastname email")
    .populate("uploadedBy", "_id firstname lastname email")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json({ result });
      }
    });
});

router.delete("/deletepost/:postId", verifyLogin, (req, res) => {
  Data.findOne({ _id: req.params.postId })
    .populate("uploadedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(404).json({ error: err });
      }
      if (post.uploadedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => res.json(result))
          .catch((err) => console.log(err));
      }
    });
});
router.delete("/deletecomment/:postId/:commentId", verifyLogin, (req, res) => {
  Data.findOne({ _id: req.params.postId })
    .populate("comments.postedBy", "_id firstname lastname email")
    .populate("uploadedBy", "_id firstname lastname email")
    .exec((err, post) => {
      if (!post) {
        return res.status(404).json({ error: "Post not Found" });
      }
      // console.log(post.comments)
      // console.log(req.params.commentId)
      post.comments = post.comments.filter((comment) => {
        return comment._id != req.params.commentId;
      });
      post.save().then((retu) => res.json(retu));
    });
});
module.exports = router;
