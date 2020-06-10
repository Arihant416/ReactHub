const express = require('express'),
   app = express(),
   PORT = 2500,
   mongoose = require('mongoose'),
   { mongoURL } = require('./config/key');

require('./models/userModel');

mongoose.connect(mongoURL,
   { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.on('connected', () => {
   console.log('Atlas connected');
})
mongoose.connection.on('error', () => {
   console.log('Failed to connect Atlas')
})
app.get('/', (req, res) => {
   res.send('Hello user');
})
app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
})