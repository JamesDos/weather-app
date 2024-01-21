const createCard = (card) => {

  // Initilize Dom Elms
  const cardContainer = document.createElement('div');
  const cityLabel = document.createElement('h1');
  const tempLabel = document.createElement('h2');
  const feelsLikeLabel = document.createElement('p');
  const humdityLabel = document.createElement('p');
  const windLabel = document.createElement('p');

  // Add Classes
  cardContainer.classList.add('card');

  // Set text content
  cityLabel.textContent = card.city;
  tempLabel.textContent = card.isFar? `${card.temp} °F`: `${card.temp} °C`;
  feelsLikeLabel.textContent = `Feels like: ${card.isFar? `${card.feelsLike} °F`: `${card.feelsLike} °C`}`;
  humdityLabel.textContent = `Humidity: ${card.humidity}%`;
  windLabel.textContent = `Wind Speed: ${card.isFar? `${card.wind} mph` : `${card.wind} kph`}`;

  // Set children
  cardContainer.append(cityLabel, tempLabel, feelsLikeLabel, humdityLabel, windLabel);
  return cardContainer;
}

const createForecast = forecast => {
  // Initilize Dom Elms
  const forecastItem = document.createElement('div');
  const day = document.createElement('p');
  const imgContainer = document.createElement('div');
  const icon = document.createElement('img');
  const chance = document.createElement('p');
  const humidity = document.createElement('p');
  const maxTemp = document.createElement('p');
  const minTemp = document.createElement('p');
  const avgTemp = document.createElement('p');

  // Add Classes and Attributes
  forecastItem.classList.add('forecast-item');
  imgContainer.classList.add('img-container');
  icon.src = forecast.icon;

  // Set text content
  day.textContent = forecast.day;
  chance.textContent = `${forecast.chance}%`;
  humidity.textContent = `${forecast.humidity}%`;
  maxTemp.textContent = forecast.isFar? `${forecast.maxTemp} °F`: `${forecast.maxTemp} °C`;
  minTemp.textContent = forecast.isFar? `${forecast.minTemp} °F`: `${forecast.minTemp} °C`;
  avgTemp.textContent = forecast.isFar? `${forecast.avgTemp} °F`: `${forecast.avgTemp} °C`;

  // Set children
  imgContainer.appendChild(icon)
  forecastItem.append(day, imgContainer, chance, humidity, maxTemp, minTemp, avgTemp);
  return forecastItem;
}

export {createForecast, createCard}

