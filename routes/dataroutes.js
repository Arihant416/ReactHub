const express = require('express'),
   router = express.Router();
const mongoose = require('mongoose'),
   Data = mongoose.model('Data');
const verifyLogin = require('../controller/verifyLogin');

// Make route to Get all the posts 
router.get('/alldata', (req, res) => {
   Data.find()
      .populate("uploadedBy", "_id firstname lastname email")
      .then(data => {
         res.json({ data })
      }).catch(err => {
         console.log(err);
      })
})
//Add a new post
router.post('/newpost', verifyLogin, (req, res) => {
   const { title, content, picture } = req.body;
   if (!title || !content || !picture) {
      return res.status(422).json({ error: "Filling all fields is mandatory" });
   }
   const uploadData = new Data({
      title,
      content,
      picture: picture,
      uploadedBy: req.user
   })
   uploadData.save()
      .then(record => {
         res.json({ uploaded: record })
      }).catch(err => console.log(err))
})

//Get posts uploaded by the current LoggedIN user
router.get('/mypost', verifyLogin, (req, res) => {
   Data.find({ uploadedBy: req.user._id })
      .populate('uploadedBy', '_id firstname lastname email')
      .then(data => {
         res.json({ data })
      }).catch(err => console.log(err));
})


module.exports = router