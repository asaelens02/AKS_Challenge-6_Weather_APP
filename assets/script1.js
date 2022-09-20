//var APIKey= "c6dd3716265310c9a99e0960bc747987";
//var city = "Lubbock";
var repoContainerEl = document.querySelector("#repos-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var userFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var Temp= document.querySelector("#temperature");
var windSpeed = document.querySelector ("#wind");
var humidity = document.querySelector ("#humidity-percent");
var weatherIcon= document.querySelector("#icon");


var formSubmitHandler = function(event) {
    event.preventDefault();
 // get value from input element
var cityname = cityInputEl.value.trim();

if (cityname) {
 getWeatherInfo(cityname);
  cityInputEl.value = "";
    // console.log(object);

} else {
  alert("Please enter a city");
}   
    console.log("here" + event);
  };

  

var getWeatherInfo = function(cityInputEl) {
    console.log("function was called");
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl +"&units=imperial&appid=c6dd3716265310c9a99e0960bc747987";

        fetch(apiURL)
      
        .then(function(response) {
            // request was successful
            if (response.ok) {

                response.json().then(function(data) {
                    console.log("data of" + cityInputEl+ data);
                    displayData(data, cityInputEl);

             
              });
            } else {
              alert('Error: Location Not Found');
            }
          })
    };

    var displayData = function(data, searchTerm) {
       console.log(data)//["main"]["feels_like"]);
   
        console.log(searchTerm);
        // clear old content
        repoContainerEl.textContent = "";
        weatherSearchTerm.textContent = searchTerm;
        Temp.textContent = data["main"]["temp"];
        humidity.textContent = data["main"]["humidity"];
        windSpeed.textContent= data["wind"]["speed"];
        weatherIcon. src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    };
    
    //need to figure this out...geocode api for location? need new UrL for forecast. 
    
    // var getForcastInfo = function(cityInputEl) {
    //     console.log("forecast was called");
    //     var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl +"&units=imperial&appid=c6dd3716265310c9a99e0960bc747987";
    
    //         fetch(apiURL)
          
    //         .then(function(response) {
    //             // request was successful
    //             if (response.ok) {
    
    //                 response.json().then(function(data) {
    //                     console.log("data of" + cityInputEl+ data);
    //                     displayData(data, cityInputEl);
    
                 
    //               });
    //             } else {
    //               alert('Error: Location Not Found');
    //             }
    //           })
    //     };


    
userFormEl.addEventListener("submit", formSubmitHandler);

  
  