import './style.css';
import { fetchCurrWeather, fetchForecast, getWeatherOverViewFar, getWeatherOverViewCel } from './fetch';
import {Card, createCard} from './domelms';

const searchBar = document.querySelector("#search-bar");
const submitCityBtn = document.querySelector("#submit-city-btn");
const mainContent = document.querySelector('.main-content');
const farBtn = document.querySelector('#fahrenheit-btn');
const celBtn = document.querySelector('#celcius-btn');


let currIsFar = true;
let selected = "F";
let prevSearch;

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

const clearMainContent = () => {
  mainContent.innerHTML = '';
}

const displayCard = async search => {
  const data = await fetchCurrWeather(search);
  console.log(data);
  let cardData;
  if (currIsFar) {
    cardData = getWeatherOverViewFar(data);
  } else {
    cardData = getWeatherOverViewCel(data);
  }
  console.log(cardData);
  const newCard = new Card(cardData.city, cardData.temp, cardData.feelsLike, cardData.humidity, cardData.gust, currIsFar);
  const newCardElm = createCard(newCard);
  clearMainContent();
  mainContent.appendChild(newCardElm);
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

const switchTempSettings = async setting => {
  console.log(`setting: ${setting}`)
  console.log(`selected: ${selected}`)
  if (setting !== selected) {
    console.log('here')
    toggleSelected();
    toggleCurrTemp();
    if (prevSearch !== undefined) {
      await displayCard(prevSearch);
    }
  }
}

submitCityBtn.addEventListener('click', async e => {
  e.preventDefault();
  const city = searchBar.value;
  console.log(`searchbar input: ${city}`);
  try {
    if (await validateForm(city)) {
      // console.log('in if')
      updatePrevSearch(city);
      await displayCard(city);
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



// fetchCurrWeather('london').then(res => console.log(res));
// fetchForecast('london').then(res => console.log(res));