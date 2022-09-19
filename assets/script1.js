//var APIKey= "c6dd3716265310c9a99e0960bc747987";
var city = "midland";


getWeatherInfo = function() {
    console.log("function was called");
  
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=c6dd3716265310c9a99e0960bc747987")
      
        .then(function(response) {
            // request was successful
            if (response.ok) {
              console.log(response);
              response.json().then(function(data) {
                console.log(data);
             
              });
            } else {
              alert('Error: Location Not Found');
            }
          })
    };
    

  
  getWeatherInfo();