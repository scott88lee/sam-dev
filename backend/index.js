// IMPORTS
const express = require('express');
const app = express();

//MIDDLE-WARE - BODYPARSER
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded( {extended: true} )); //Parse URL-encoded bodies

//ENABLE CORS FOR DEVELOPMENT
const cors = require('cors'); //Enable CORS
app.use(cors())

//START OF ROUTES
app.get('/', (req, res) => {
  data = { Message: 'ROOOTT!!!' }
  res.send(data);
});

app.use('/products', require('./routes/products'));
//app.use('/txns', require('./routes/txns'));

//404 Precessing
app.get('*', (req, res) => {
    data = { Message: '404 ERROR, NOT FOUND' }
    res.status(404)
    res.send(data);
});

app.listen(3000, ()=> {console.log("Listen 3000")});