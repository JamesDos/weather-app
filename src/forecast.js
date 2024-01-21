class Forecast {
  constructor(day, icon, chance, humidity, maxTemp, minTemp, avgTemp, isFar) {
    this.day = day;
    this.icon = icon;
    this.chance = chance;
    this.humidity = humidity;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.avgTemp = avgTemp;
    this.isFar = isFar;
  }
}

export default Forecast