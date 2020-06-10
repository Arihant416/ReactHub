const mongoose = require('mongoose'),
   { ObjectId } = mongoose.Schema.Types,
   dataSchema = new mongoose.Schema({
      title: {
         type: String, required: true
      },
      content: {
         type: String, required: true,
      },
      pic: {
         type: String,
         default: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
      },
      uploadedBy: {
         type: ObjectId,
         ref: "User"
      }
   },
      {
         timestamps: true,
      })

mongoose.model('Data', dataSchema);