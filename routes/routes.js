
exports.computertoarduino = function(req, res){
	console.log (req.params.temperature)
	var response = {
		compcomm: global.compin
	}
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