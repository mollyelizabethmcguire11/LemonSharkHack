
exports.computertoarduino = function(req, res){
	var temp = req.body.temperature;
	var color = '#0000FF';
	
	if (temp > 80) {
		color = '#FFCC00'
	}
	if (temp > 90) {
		color = '#FF0000'
	}

	  
	global.anode.color(color)
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