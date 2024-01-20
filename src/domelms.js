class Card {
  constructor(city, temp, feelsLike, humidity, wind, isFar) {
    this.city = city;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.wind = wind;
    this.isFar = isFar;
  }
}

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

export {Card, createCard}

