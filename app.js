var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('This is sample node js app1:x:X:Q:q');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
