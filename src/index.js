import './style.css';
import { fetchCurrWeather, fetchForecast, getWeatherOverView, getForeCastProp} from './fetch';
import {createCard, createForecast} from './domelms';
import Card from './card';
import Forecast from './forecast';

const searchBar = document.querySelector("#search-bar");
const submitCityBtn = document.querySelector("#submit-city-btn");
const cardContainer = document.querySelector('.card-container');
const farBtn = document.querySelector('#fahrenheit-btn');
const celBtn = document.querySelector('#celcius-btn');
const foreCastList = document.querySelector('.forecast-list');

let currIsFar = true;
let selected = "F";
let prevSearch = "New York";

// Helper functions

const validateForm = async search => {
  try {
    if(search === "") {
      console.log('search is empty')
      searchBar.setCustomValidity("Input Must Not Be Empty");
      searchBar.reportValidity();
      return false;
    } 
    await fetchCurrWeather(search);
    searchBar.setCustomValidity("");
    return true;
  } catch (err) {
    // console.log('caught err in validateForm', err);
    if (err.message.includes("City Not Found")) {
      searchBar.setCustomValidity("City Not Found");
      searchBar.reportValidity();
    } else {
      throw err;  // Re-throw other errors
    }
    return false;
  }
}

const clearCardContainer = () => {
  cardContainer.innerHTML = '';
}

const clearForecastList = () => {
  foreCastList.innerHTML = '';
}

const toggleCurrTemp = () => {
  currIsFar = !currIsFar;
}

const toggleSelected = () => {
  if(farBtn.classList.contains('selected')) {
    farBtn.classList.remove('selected');
    celBtn.classList.add('selected');
    console.log('selected celcius')
    selected = "C"
  } else {
    celBtn.classList.remove('selected');
    farBtn.classList.add('selected');
    console.log('selected farienheight')
    selected = "F"
  }
}

const updatePrevSearch = newSearch => {
  prevSearch = newSearch;
}

// Event listener functions

const displayCard = async search => {
  const data = await fetchCurrWeather(search);
  console.log(data);
  const cardData = getWeatherOverView(data, currIsFar);
  console.log(cardData);
  const newCard = new Card(cardData.city, cardData.temp, cardData.feelsLike, cardData.humidity, cardData.gust, currIsFar);
  const newCardElm = createCard(newCard);
  clearCardContainer();
  cardContainer.appendChild(newCardElm);
}

const displayForeCast = async search => {
  const data = await fetchForecast(search);
  console.log('forecastData', data);
  const forecastDataArr = getForeCastProp(data, currIsFar);
  console.table('forecastDataArr', forecastDataArr);
  clearForecastList();
  forecastDataArr.forEach(forecast => {
    const newForecast = new Forecast(forecast.day, forecast.icon, forecast.chance, forecast.humidity, forecast.maxTemp, forecast.minTemp, forecast.avgTemp, currIsFar);
    const newForecastElm = createForecast(newForecast);
    foreCastList.appendChild(newForecastElm);
  })
}

const switchTempSettings = async setting => {
  if (setting !== selected) {
    toggleSelected();
    toggleCurrTemp();
    if (prevSearch !== undefined) {
      await displayCard(prevSearch);
      await displayForeCast(prevSearch);
    }
  }
}

// Add event listeners

submitCityBtn.addEventListener('click', async e => {
  e.preventDefault();
  const city = searchBar.value;
  console.log(`searchbar input: ${city}`);
  try {
    if (await validateForm(city)) {
      // console.log('in if')
      updatePrevSearch(city);
      await displayCard(city);
      await displayForeCast(city);
    }
  } catch (err) {
      console.log('Unexpected error in submitCityBtn event listener:', err);
  }
});

searchBar.addEventListener('input', () => {
  searchBar.setCustomValidity("");
})

farBtn.addEventListener('click', () => switchTempSettings("F"));
celBtn.addEventListener('click', () => switchTempSettings("C"));

// Run functions when page first loads

displayCard('New York');
displayForeCast('New York');

// fetchCurrWeather('london').then(res => console.log(res));
fetchForecast('london').then(res => console.log("forecast", res));

