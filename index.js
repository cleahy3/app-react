var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


var routes = require('./config/routes');
var port = process.env.PORT || 3000;






//load current user



app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
// app.use(bodyParser.json())
 



app.use(routes);

app.listen(port , function(){
  console.log('app is listening on port'+port);
});


module.exports= app;

