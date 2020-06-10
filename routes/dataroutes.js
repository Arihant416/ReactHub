const express = require('express'),
   router = express.Router();
const mongoose = require('mongoose'),
   Data = mongoose.model('Data');
const verifyLogin = require('../controller/verifyLogin');


//Add a new post
router.post('/newpost', verifyLogin, (req, res) => {
   const { title, content } = req.body;
   if (!title || !content) {
      return res.status(422).json({ error: "Filling all fields is mandatory" });
   }
   const uploadData = new Data({
      title,
      content,
      uploadedBy: req.user
   })
   uploadData.save()
      .then(record => {
         res.json({ uploaded: record })
      }).catch(err => console.log(err))
})



module.exports = router