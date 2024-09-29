'use strict'

var express = require('express');
var app = express();
var server;

app.set("port", process.env.PORT || 80);
const greetingMessage = process.env.GREETING || 'Hello to Cloud & DevOps World !!!!';

app.get('/', function(req, res){
  res.send(greetingMessage);
});

/*
app.get('/', function(req, res){
  res.send('Hello to Cloud Tech & DevOps World !!!!');
});

*/
const PORT = process.env.NODE_ENV === 'test' ? 3000 : (process.env.PORT || 80);

if (!module.parent) {
  server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Node.js API app listening at http://%s:%s", host, port);
  });
}

module.exports = app; // Export app for testing
