var express = require('express');
var fs = require('fs');
var app = express();
var router = require('./router/main')(app, fs);

app.set('views', __dirname + '/view'); //html 주소
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));