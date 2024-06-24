const cityInput = document.getElementById("city-input");
const cityContainerEl = document.getElementById("city-card");
const submitBtn = document.getElementById("submit-button");
const cityFormEl = document.getElementById("city-form");
const day1 = document.getElementById("forecast-card1");
const day2 = document.getElementById("forecast-card2");
const day3 = document.getElementById("forecast-card3");
const day4 = document.getElementById("forecast-card4");
const day5 = document.getElementById("forecast-card5");

const dateCard1 = document.getElementById("date1");
const dateCard2 = document.getElementById("date2");
const dateCard3 = document.getElementById("date3");
const dateCard4 = document.getElementById("date4");
const dateCard5 = document.getElementById("date5");


//local storage
const searchHistory = document.getElementById("recent-searches");
let searchedEntry = JSON.parse(localStorage.getItem("searches"));
//let currentCity = searchedEntry[0];
//console.log(currentCity);

if (searchedEntry === null) {
    searchedEntry =[]
} else {
  // loadCurrent();
   populateRecent();
};


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
    searchedEntry.unshift(city);

    localStorage.setItem("searches", JSON.stringify(searchedEntry));
    console.log(searchedEntry);

    nextSearch(city); }

const nextSearch = function() {
      


    let queryURL= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`;

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("lat" + data[0].lat);
        console.log("lon" + data[0].lon);

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


        //add weather icons to main card and forecast cards


const day1Icon = data.list[7].weather[0].icon;
const day2Icon = data.list[15].weather[0].icon;
const day3Icon = data.list[23].weather[0].icon;
const day4Icon = data.list[31].weather[0].icon;
const day5Icon = data.list[39].weather[0].icon;

//cityIcon.insertAdjacentHTML ('afterbegin',<image src=""></image>)

   
 //Add city name, date,temp, humidty and icon onto main city card       
    function addCityData() {    
    const cityTemp = Math.round(data.list[0].main.temp);  
    const cityHumidity = data.list[0].main.humidity;
    const cityWind = data.list[0].wind.speed;
    const cityDate = data.list[0].dt_txt;
    formatCityDate = cityDate.slice(0,10);
    cityDateJs = dayjs(formatCityDate).format('ddd, MM/DD/YY');
    const cityIcon = data.list[0].weather[0].icon; 
    
    cityContainerEl.innerHTML = `<p class="title is-5">${cityName}</p> 
                                 <p>${state}</p>
                                 <p>Date: ${cityDateJs}</p>
                                 <p>Temp: ${cityTemp}°F</p>
                                 <p>Humidity: ${cityHumidity}%</p>
                                 <p>Wind: ${cityWind} MPH</p>
                                 <image src="https://openweathermap.org/img/wn/${cityIcon}@2x.png"></image>`;


//Add date, temp, humidity and wind to forecast cards
    const day1CityTemp = Math.round(data.list[7].main.temp);
    const day1CityHumidity = data.list[7].main.humidity;
    const day1CityWind = data.list[7].wind.speed;
    const day1Date = data.list[7].dt_txt;
    formatCityDate1 = day1Date.slice(0,10);
    cityDateJs1 = dayjs(formatCityDate1).format('ddd, MM/DD/YY');                   
                                 

    dateCard1.insertAdjacentHTML ('afterbegin', `<p class=" title is-5"> ${cityDateJs1}<p>`);
    day1.innerHTML = `<p>Temp: ${day1CityTemp} °F</p> 
                      <p>Humidity: ${day1CityHumidity}% </p>
                      <p>Wind: ${day1CityWind} MPH</p>
                      <image src="https://openweathermap.org/img/wn/${day1Icon}@2x.png"></image>`;

    const day2CityTemp = Math.round(data.list[15].main.temp);
    const day2CityHumidity = data.list[15].main.humidity;
    const day2CityWind = data.list[15].wind.speed;
    const day2Date = data.list[15].dt_txt;
    formatCityDate2 = day2Date.slice(0,10);
    cityDateJs2 = dayjs(formatCityDate2).format('ddd, MM/DD/YY');        

    dateCard2.insertAdjacentHTML ('afterbegin', `<p class=" title is-5"> ${cityDateJs2}<p>`);
    day2.innerHTML = `<p>Temp: ${day2CityTemp}°F</p
                      <p>Humidity: ${day2CityHumidity}% </p>
                      <p>Wind: ${day2CityWind} MPH</p>
                      <image src="https://openweathermap.org/img/wn/${day2Icon}@2x.png"></image>`;

                

    const day3CityTemp = Math.round(data.list[23].main.temp);
    const day3CityHumidity = data.list[23].main.humidity;
    const day3CityWind = data.list[23].wind.speed;
    const day3Date = data.list[23].dt_txt; 
    formatCityDate3 = day3Date.slice(0,10);
    cityDateJs3 = dayjs(formatCityDate3).format('ddd, MM/DD/YY');  
    
    dateCard3.insertAdjacentHTML ('afterbegin', `<p class=" title is-5"> ${cityDateJs3}<p>`);
    day3.innerHTML = `<p>Temp: ${day3CityTemp}°F</p>
                      <p>Humidity: ${day3CityHumidity}%</p>
                      <p>Wind: ${day3CityWind} MPH</p>
                      <image src="https://openweathermap.org/img/wn/${day3Icon}@2x.png"></image>`;

    const day4CityTemp = Math.round(data.list[31].main.temp);
    const day4CityHumidity = data.list[31].main.humidity;
    const day4CityWind = data.list[31].wind.speed;
    const day4Date = data.list[31].dt_txt; 
    formatCityDate4 = day4Date.slice(0,10);
    cityDateJs4 = dayjs(formatCityDate4).format('ddd, MM/DD/YY'); 

    dateCard4.insertAdjacentHTML ('afterbegin', `<p class=" title is-5"> ${cityDateJs4}<p>`);    
    day4.innerHTML = `<p>Temp: ${day4CityTemp}°F</p>
                      <p>Humidity: ${day4CityHumidity}%</p>
                      <p>Wind: ${day4CityWind} MPH</p>
                      <image src="https://openweathermap.org/img/wn/${day4Icon}@2x.png"></image>`;  

    const day5CityTemp = Math.round(data.list[39].main.temp);
    const day5CityHumidity = data.list[39].main.humidity;
    const day5CityWind = data.list[39].wind.speed;
    const day5Date = data.list[39].dt_txt; 
    formatCityDate5 = day5Date.slice(0,10);
    cityDateJs5 = dayjs(formatCityDate5).format('ddd, MM/DD/YY'); 

    dateCard5.insertAdjacentHTML ('afterbegin', `<p class=" title is-5"> ${cityDateJs5}<p>`);
    day5.innerHTML = `<p>Temp: ${day5CityTemp}°F</p>
                      <p>Humidity: ${day5CityHumidity}% </p>
                      <p>Wind: ${day5CityWind} MPH </p>
                      <image src="https://openweathermap.org/img/wn/${day5Icon}@2x.png"></image>`; 

    
     };
    addCityData();
     


    
 });
}); }


//search.addEventListener("click", formSubmitHandler(event.target)); 


function populateRecent() {
    const maxElements = Math.min(history.length, 6);
    
        for (let i=0; i <6; i++) {
    console.log(searchedEntry[i]);
    
    let search = document.createElement("button");
    
    search.innerHTML = `<button class="tag">${searchedEntry[i]}</button>`;
    searchHistory.appendChild(search);
}};

searchHistory.addEventListener("click", function(event) {
    city = event.target.textContent;
    nextSearch(city);
    removeChild("id", 'date1,date2, date3,date4, date5');
});


cityFormEl.addEventListener('submit', formSubmitHandler);
