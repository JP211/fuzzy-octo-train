"use strict"

var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE USED TO DEFINE FOLDER FOR STATIC FILES LIKE IMAGES
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function() {
  console.log('App is listening on port 3000');
})
