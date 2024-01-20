
const fetchCurrWeather = (search) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=777dad6b095b47f8b5d42049241801&q=${search}`;
  return fetch(url, {mode: 'cors'})
    .then(res => {
      if(!res.ok) {
        throw new Error(`City Not Found (${res.status} ${res.statusText})`)
      } else {
        return res.json()
      }
    })
    .catch(err => {
      throw err;
    });
}


const fetchForecast = (search) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=777dad6b095b47f8b5d42049241801&q=${search}&days=7`;
  return fetch(url, {mode: 'cors'})
  .then(res => res.json())
  .then(res => res.current)
  .catch(err => {
    throw err
  });
}

const getWeatherOverViewFar = (weatherData) => 
  ({
    city: weatherData.location.name,
    condition: weatherData.current.condition,
    temp: weatherData.current.temp_f,
    feelsLike: weatherData.current.feelslike_f,
    gust: weatherData.current.gust_mph,
    humidity: weatherData.current.humidity
  })

const getWeatherOverViewCel = (weatherData) => 
({
  city: weatherData.location.name,
  condition: weatherData.current.condition,
  temp: weatherData.current.temp_c,
  feelsLike: weatherData.current.feelslike_c,
  gust: weatherData.current.gust_kph,
  humidity: weatherData.current.humidity
})




export {fetchCurrWeather, fetchForecast, getWeatherOverViewFar, getWeatherOverViewCel}

