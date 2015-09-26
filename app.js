var express = require('express');
var routes = require('./routes/routes');
var http = require('http');
var path = require('path');

var app = express();
global.name = 'input';


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.intro);
app.get('/api/gettemp', routes.temprequest);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var five = require("johnny-five"),
    onButton, offButton, led;
	five.Board().on("ready", function() {
	  onButton = new five.Button(2);
	  led = new five.Led(13);

	  onButton.on("down", function(value){
		led.on();
	  });

	  offButton = new five.Button(3);
		offButton.on("down", function(){
	  led.off();
	});
});
