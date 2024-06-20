const cityFormEl = document.querySelector("#city-input");
const cityContainerEl = document.querySelector('#city-card')
const formSubmitHandler = function (event) {
    preventDefault();
    const cityName = cityFormEl.value.trim();

    if (cityName) {
        getUserRepos(cityName);
        cityContainerEl.textContent = '';

    }

}


let city = cityFormEl.value.trim();

const APIKey = "13d0956ce959ce03bfde920b34984e08";

function getApi() {
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
}
let city; 


api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);  });

fetchButton.addEventListener('click', getApi);


       

     
