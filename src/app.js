// importing Core packeges
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// requiring all Routes to mount with server
const allROutes = require('./routes/index.route')


//  Start express app
const app = express();
// For Cross Origin Resource Sharing
app.use(cors())
//  Body parser, reading data from body into req.body
app.use(bodyParser.json());


//  ROUTES 
app.use('/api', allROutes)


module.exports = app;
