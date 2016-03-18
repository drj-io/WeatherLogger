var moment = require('moment-timezone');
var mysql      = require('mysql');
var connection = mysql.createConnection(require('./config/database.js'));
var colors = require('colors');
var express = require('express');
var app = express();

connection.connect();

app.get('/', function (req, res) {
  res.send('Hello World!');
});




app.listen(3000, function () {
  console.log('app listening on port 3000!');
});


setInterval(function(){ console.log('log'); log(); }, 15000);
log();
function log(){
  var post = { timestamp : moment().format() }; 
  var query = connection.query('INSERT INTO log SET ?', post, function(err, result) {
	console.log('logged id', result.insertId.toString().red, 'at', post.timestamp.blue);  			// Neat!	 	
  });


}


// Blink an LED
var five = require("johnny-five");
var board = new five.Board({repl:false});

board.on("ready", function() {
  var led = new five.Led(13);
  setInterval(function(){  led.toggle(); console.log('blink');} , 250);
});
