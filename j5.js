// Blink an LED
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  setInterval(function(){  led.toggle(); console.log('blink');} , 250);
});
