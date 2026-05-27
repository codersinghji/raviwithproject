const apiKey = "d3ba2e326cedd6511aea5c5cb2d83c5a";

const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

const temp = document.querySelector(".weather-info h1");
const city = document.querySelector(".weather-info h2");
const weatherText = document.querySelector(".weather-info p");
const humidity = document.querySelector(".details div:first-child h3");
const wind = document.querySelector(".details div:last-child h3");

async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  if (data.cod == 401) {
    alert("API key invalid or not activated yet");
    return;
  }

  if (data.cod == 404) {
    alert("City not found");
    return;
  }

  temp.innerHTML = Math.round(data.main.temp) + "°C";
  city.innerHTML = data.name;
  weatherText.innerHTML = data.weather[0].main;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";
}

button.addEventListener("click", function () {
  getWeather(input.value);
});