$(document).ready(function() {

		var hash = {
		'sunny':['sun', 'bright', 'clear', 'sunny', 'clear skies'],
		'cloudy':['overcast','cloudy','foggy','gray','grey', 'partly cloudy', 'mostly cloudy'],
		'rainy':['rain', 'wet', 'pouring', 'downpour', 'drizzle', 'shower', 'showers', 'scattered'],
		'snowy': ['snow', 'sleet', 'hail', 'ice', 'flurries'],
		'fair':[]
		}

	function set_weather_picture(weather){
		console.log(weather);
		if (hash['sunny'].indexOf(weather.toLowerCase()) >= 0) {
			$('img.weather-image').attr('src','./images/sunny.png');
		} else if (hash['rainy'].indexOf(weather.toLowerCase()) >= 0) {
			$('img.weather-image').attr('src','./images/rainy.png');
		} else if (hash['cloudy'].indexOf(weather.toLowerCase()) >= 0) {
			$('img.weather-image').attr('src','./images/cloudy.png');
		} else if (hash['snowy'].indexOf(weather.toLowerCase()) >= 0) {
			$('img.weather-image').attr('src','./images/snowy.png');
		} else {
			$('img.weather-image').attr('src','./images/general.png');
		}
	};

function look_up_weather(location){
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

			set_weather_picture(weather.currently);

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

	look_up_weather("New York,NY")

	$("button").on("click",function(){
		var location = $("#city").val() + "," + $("#region").val();
		look_up_weather(location)
	})

});
