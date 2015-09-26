
exports.computertoarduino = function(req, res){
	console.log (req.params.temperature)
	var response = {
		compcomm: global.compin
	}
	
	global.board.on("ready", function() {
	  var myLed = new j5.Led.RGB({
		  pins: {
			  red: 9,
			  green: 10,
			  blue: 11
		  },
		  isAnode: true
	  });
	  
	  this.repl.inject({
		anode: myLed
	});
	anode.on()
	anode.color('#ff0000')

	});
	res.json({})
}

exports.temprequest = function(req, res){
	var response = {
		temperature: global.name
	}
	res.json(response)
}
exports.intro = function(req, res){
	
		res.render('index')
		
};
// layout page located in template folder
//alert('SOme message');//rec.params.temperature