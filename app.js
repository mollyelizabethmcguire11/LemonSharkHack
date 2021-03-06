var express = require('express');
var routes = require('./routes/routes');
var http = require('http');
var path = require('path');

var app = express();
global.name = false;
global.compin;


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
app.post('/api/sendtemp', routes.computertoarduino)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var five = require("johnny-five"),
    onButton, offButton, led;


five.Board().on("ready", function() {
	onButton = new five.Button(2);
	offButton = new five.Button(3);
	led = new five.Led(13);

	onButton.on("down", function(value){
		console.log('pressed on')
		global.name = true;
		led.on();
	});

	offButton.on("down", function(){
		console.log('pressed off')
		global.name = false;
		led.off();
	});
	
	if (!global.anode) {
	
		global.anode = new five.Led.RGB({
			pins: {
				red: 9,
				green: 10,
				blue: 11
			},
			isAnode: true
		});
	}
});



