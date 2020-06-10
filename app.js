const express = require('express'),
   app = express(),
   PORT = 2500;


const checkMiddleWare = () => {
   console.log('Checking middleware');

}
app.use(checkMiddleWare)
app.get('/', (req, res) => {
   res.send('Hello user');
})


app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
})