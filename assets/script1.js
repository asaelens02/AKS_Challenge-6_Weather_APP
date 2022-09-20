//var APIKey= "c6dd3716265310c9a99e0960bc747987";
//var city = "Lubbock";
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
var userFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var feelsLike= document.querySelector("#feels-like");

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
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl + "&appid=c6dd3716265310c9a99e0960bc747987";

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

    var displayData = function(main, searchTerm) {
       console.log(main["main"]["feels_like"]);
        // console.log (main.humidity)
        // feels_like
        // : 
        // 302.99
        // humidity
        // : 
        // 39
        // pressure
        // : 
        // 1014
        // temp
        // : 
        // 303.38
        // temp_max
        // : 
        // 304.29
        // temp_min
        // : 
        // 302.39
        console.log(searchTerm);
        // clear old content
        repoContainerEl.textContent = "";
        repoSearchTerm.textContent = searchTerm;
        feelsLike.textContent = main["main"]["feels_like"];
      };


//     // loop over repos
// for (var i = 0; i < repos.length; i++) {
//     // format repo name
//     var repoName = repos[i].owner.login + "/" + repos[i].name;
  
//     // create a container for each repo
//     var repoEl = document.createElement("div");
//     repoEl.classList = "list-item flex-row justify-space-between align-center";
  
//     // create a span element to hold repository name
//     var titleEl = document.createElement("span");
//     titleEl.textContent = repoName;
  
//     // append to container
//     repoEl.appendChild(titleEl);
  
//     // append container to the dom
//     repoContainerEl.appendChild(repoEl); 
    
    

//     // create a status element
// var statusEl = document.createElement("span");
// statusEl.classList = "flex-row align-center";

// // check if current repo has issues or not
// if (repos[i].open_issues_count > 0) {
//   statusEl.innerHTML =
//     "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
// } else {
//   statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
// }

// // append to container
// repoEl.appendChild(statusEl);

// };
    
userFormEl.addEventListener("submit", formSubmitHandler);

  
  