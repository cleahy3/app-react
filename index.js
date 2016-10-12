var express = require('express');
var http = require('http');

var request = require('request');
var app = express();


var routes = require('./config/routes');
var port = process.env.PORT || 3000;






//load current user






app.use(routes);

app.listen(port , function(){
  console.log('app is listening on port'+port);
});


module.exports= app;

