
//form variables
var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");
//variables to store searched cities
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");


//submit form
var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var cityname = nameInputEl.value.trim();
  
    if (cityname) {
      getWeatherInfo(cityname);
  
   
      cityContainerEl.textContent = "";
      nameInputEl.value = "";
    } else {
      alert("Please enter a city!");
    }
  };

  var getWeatherInfo = function(city) {
  
    
    var APIKey= "2f62ef237a7b7a3dc542b6429171622d"
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + nameInputEl + "&appid=" + APIKey;
    // make a get request to url
    fetch(apiURL)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayInfo(data, city);
          });
        } else {
          alert('Error: Location Not Found');
        }S
      })
      .catch(function(error) {
        alert("Unable to connect to OpenWeather");
      });
  }; 
  var displayCity = function(cities, searchTerm) {
    // check if api returned any cities
    if (cities.length === 0) {
      cityContainerEl.textContent = "No city found.";
      return;
    }
  
    citySearchTerm.textContent = searchTerm;
  
    // loop over cities
    for (var i = 0; i < cities.length; i++) {
      // format city name
      var cityName = cities[i]+ "/" + cities[i].name;
  
      // create a span element to hold repository name
      var titleEl = document.createElement("span");
      titleEl.textContent = cityName;
  
      // append to container
      cityEl.appendChild(titleEl);
  
      // create a status element
      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

  
      // append to container
      cityEl.appendChild(statusEl);
  
      // append container to the dom
      cityContainerEl.appendChild(repoEl);
    }
  };
  
  // add event listeners to form and button container
  cityFormEl.addEventListener("search", formSubmitHandler);