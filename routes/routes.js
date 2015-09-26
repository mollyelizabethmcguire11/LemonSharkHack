


exports.temprequest = function(req, res){
	var response = {
		temperature: 68
	}
	res.json(response)
}
exports.intro = function(req, res){
	
		res.render('index')
		
};
// layout page located in template folder
//alert('SOme message');