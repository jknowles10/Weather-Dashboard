const cityInput = document.getElementById("city-input");
const cityContainerEl = document.getElementById("city-card");
const submitBtn = document.getElementById("submit-button");
const cityFormEl = document.getElementById("city-form");
const day1 = document.getElementById("forecast-card1");
const day2 = document.getElementById("forecast-card2");
const day3 = document.getElementById("forecast-card3");
const day4 = document.getElementById("forecast-card4");
const day5 = document.getElementById("forecast-card5");

let city;
let date; 
let lat;
let lon;
let cityName
let state; 
const APIKey = "13d0956ce959ce03bfde920b34984e08";

const queryURL= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`;




const formSubmitHandler = function (event) {
    event.preventDefault();
     city = cityInput.value.trim();
    console.log(city);


    let queryURL= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`;

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("lat " + data[0].lat);
        console.log("lon " + data[0].lon);

        let lat = data[0].lat;
        let lon = data[0].lon;
        let cityName = data[0].name;
        let state = data[0].state; 
//plug data[0].lat & lon into the api to do another fetch request
        latlonURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
    
    fetch(latlonURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.list);
        console.log("Temp:" +Math.round(data.list[0].main.temp));
        console.log("Humidity:" +data.list[0].main.humidity);
        console.log("Wind:" +data )

    
 //Add city name, temp and humidty onto main city card       
    function addCityData() {    
    const cityTemp = Math.round(data.list[0].main.temp);  
    const cityHumidity = data.list[0].main.humidity;
    const cityWind = data.list[0].wind.speed;
    const cityDate = data.list[0].dt_txt;
    
    cityContainerEl.innerHTML = `<p class="title is-5">${cityName}</p> 
                                 <p>${state}</p>
                                 <p>Date: ${cityDate}</p>
                                 <p>Temp: ${cityTemp}°F</p>
                                 <p>Humidity: ${cityHumidity}%</p>
                                 <p>Wind: ${cityWind} MPH</p>`;


//Add date, temp, humidity and wind to forecast cards
    const day1CityTemp = Math.round(data.list[8].main.temp);
    const day1CityHumidity = data.list[8].main.humidity;
    const day1CityWind = data.list[8].wind.speed;
    const day1Date = data.list[8].dt_txt;                   
                                 

    
    day1.innerHTML = `<p class="title is-5"> ${day1Date}<p>
                      <p>Temp: ${day1CityTemp} °F </p> 
                      <p>Humidity: ${day1CityHumidity}% </p>
                      <p>Wind: ${day1CityWind} MPH</p>`;

    const day2CityTemp = Math.round(data.list[16].main.temp);
    const day2CityHumidity = data.list[16].main.humidity;
    const day2CityWind = data.list[16].wind.speed;
    const day2Date = data.list[16].dt_txt;       

    
    day2.innerHTML = `<p class="title is-5"> ${day2Date}<p>
                      <p>Temp: ${day2CityTemp}°F</p
                      <p>Humidity: ${day2CityHumidity}% </p>
                      <p>Wind: ${day2CityWind} MPH</p>`;

                

    const day3CityTemp = Math.round(data.list[24].main.temp);
    const day3CityHumidity = data.list[24].main.humidity;
    const day3CityWind = data.list[24].wind.speed;
    const day3Date = data.list[24].dt_txt;  
    
    day3.innerHTML = `<p class="title is-5"> ${day3Date}<p>
                      <p>Temp: ${day3CityTemp}°F</p>
                      <p>Humidity: ${day3CityHumidity}%</p>
                      <p>Wind: ${day3CityWind} MPH</p>`;

    const day4CityTemp = Math.round(data.list[32].main.temp);
    const day4CityHumidity = data.list[32].main.humidity;
    const day4CityWind = data.list[32].wind.speed;
    const day4Date = data.list[32].dt_txt; 

    day4.innerHTML = `<p class="title is-5"> ${day4Date}<p>
                      <p>Temp: ${day4CityTemp}°F</p>
                      <p>Humidity: ${day4CityHumidity}%</p>
                      <p>Wind: ${day4CityWind} MPH</p>`;  

    const day5CityTemp = Math.round(data.list[39].main.temp);
    const day5CityHumidity = data.list[39].main.humidity;
    const day5CityWind = data.list[39].wind.speed;
    const day5Date = data.list[39].dt_txt; 
    
    day5.innerHTML = `<p class="title is-5"> ${day5Date}<p>
                      <p>Temp: ${day5CityTemp}°F</p>
                      <p>Humidity: ${day5CityHumidity}% </p>
                      <p>Wind: ${day5CityWind} MPH </p>`; 


    
     };
    addCityData();
     


    
 });
}); }

cityFormEl.addEventListener('submit', formSubmitHandler);
