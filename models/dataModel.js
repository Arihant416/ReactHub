const mongoose = require('mongoose'),
   { ObjectId } = mongoose.Schema.Types,
   dataSchema = new mongoose.Schema({
      title: {
         type: String, required: true
      },
      content: {
         type: String, required: true,
      },
      picture: {
         type: String,
         required: true
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