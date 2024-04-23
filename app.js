const apiKey = "e34861584216e1263ebb298171f62279";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weatherIcon=document.querySelector(".weather-icon");
let inp = document.querySelector('#search-box');


let btn =document.querySelector('.search-btn');



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` ); // +`&q=${input}`
    if(response.status == 404){
        alert("Invalid City name!")
    }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed +` Km/h`;

if(data.weather[0].main=="Clouds"){
    weatherIcon.src ="assets/images/clouds.png";
} if (data.weather[0].main=="Rain") {
    weatherIcon.src ="assets/images/rain.png";
} if(data.weather[0].main=="Clear") {
    weatherIcon.src ="assets/images/clear.png";
}if(data.weather[0].main=="Snow") {
    weatherIcon.src ="assets/images/snow.png";
}if(data.weather[0].main=="Drizzle") {
    weatherIcon.src ="assets/images/drizzle.png";
}if(data.weather[0].main=="Mist") {
    weatherIcon.src ="assets/images/mist.png";
}
    }


}


btn.addEventListener("click" , function(){
    checkWeather(inp.value);
})

