//var APIKey= "c6dd3716265310c9a99e0960bc747987";
//var city = "Lubbock";
var userFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");

var formSubmitHandler = function(event) {
    event.preventDefault();
 // get value from input element
var cityname = cityInputEl.value.trim();

if (cityname) {
  getWeatherInfo(cityname);
  cityInputEl.value = "";
} else {
  alert("Please enter a city");
}   
    console.log(event);
  };

  

var getWeatherInfo = function(cityInputEl) {
    console.log("function was called");
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl + "&appid=c6dd3716265310c9a99e0960bc747987";

        fetch(apiURL)
      
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
    
    userFormEl.addEventListener("submit", formSubmitHandler);

  
  