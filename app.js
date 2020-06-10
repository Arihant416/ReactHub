const express = require('express'),
   app = express(),
   PORT = 2500,
   mongoose = require('mongoose'),
   { mongoURL } = require('./config/key');


mongoose.connect(mongoURL,
   { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.on('connected', () => {
   console.log('Atlas connected');
})
mongoose.connection.on('error', () => {
   console.log('Failed to connect Atlas')
})
require('./models/userModel');
//Routes Required
app.use(express.json());
app.use(require('./routes/userRoutes'));

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
})