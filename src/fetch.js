const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


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
  .then(res => {
    if(!res.ok) {
      throw new Error(`City Not Found (${res.status} ${res.statusText})`)
    } else {
      return res.json()
    }
  })
  .then(res => res.forecast.forecastday)
  .catch(err => {
    throw err;
  });
}

const getWeatherOverView = (weatherData, isFar) => 
  ({
    city: weatherData.location.name,
    condition: weatherData.current.condition,
    temp: isFar? weatherData.current.temp_f : weatherData.current.temp_c,
    feelsLike: isFar? weatherData.current.feelslike_f : weatherData.current.feelslike_c,
    gust: isFar? weatherData.current.gust_mph : weatherData.current.gust_kph,
    humidity: weatherData.current.humidity
  })

const getForeCastProp = (forecastData, isFar) => 
  forecastData.map((forecast, index) => 
    ({
      day: days[index],
      icon: forecast.day.condition.icon,
      chance: forecast.day.daily_chance_of_rain,
      humidity: forecast.day.avghumidity,
      maxTemp: isFar? forecast.day.maxtemp_f : forecast.day.maxtemp_c,
      minTemp: isFar? forecast.day.mintemp_f : forecast.day.mintemp_c,
      avgTemp: isFar? forecast.day.avgtemp_f : forecast.day.avgtemp_c
    })
  )

export {fetchCurrWeather, fetchForecast, getWeatherOverView, getForeCastProp}

