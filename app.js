const express = require('express'),
   app = express(),
   PORT = 2500,
   mongoose = require('mongoose'),
   { mongoURL } = require('./config/key');

require('./models/userModel');
app.use(express.json());
mongoose.connect(mongoURL,
   { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.on('connected', () => {
   console.log('Atlas connected');
})
mongoose.connection.on('error', () => {
   console.log('Failed to connect Atlas')
})

//Routes Required
app.use(require('./routes/userRoutes'));

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
})