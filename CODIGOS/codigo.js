// 4664e9360bf8755c62b214a979e413e4
// variaveis globais
const apiKey = "4664e9360bf8755c62b214a979e413e4";
const apiCountryURL = "https://flagcdn.com/w40/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weatherDataContainer = document.querySelector("#weather-data");

// funcoes
const getWaetherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};
const showWeatherData = async (city) => {
  const data = await getWaetherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );

  countryElement.setAttribute(
    "src",
    `https://flagcdn.com/w40/${data.sys.country.toLowerCase()}.png`
  );

  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  weatherDataContainer.classList.remove("hide");
};

// eventos
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});


cityInput.addEventListener('keyuo', function(e) {

    if (e.code === 'Enter') {
        const city = e.target.value
        showWeatherData(city)
    }
})