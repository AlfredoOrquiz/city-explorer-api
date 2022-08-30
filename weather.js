const axios = require(`axios`);

let cache = {};

let getWeather = async (request, response, next) => {
  let cacheExpire = 20;
  let cacheKey = `${request.query.searchQuery}Cache`;
  console.log(cacheKey);
  if (cache[cacheKey] && Date.now() - cache[cacheKey].timeStamp < cacheExpire) {
    let lat = request.query.lat;
    let lon = request.query.lon;
    let urlWeather = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}&days=5&units=I`
    let weatherObj = await axios.get(urlWeather);
    let selectedCity = weatherObj.data.data.map (day => new Forecast(day));
    response.send(selectedCity);
  // } catch(err) {
  //   next(err)
  }
};

class Forecast {
  constructor(day) {
    this.date = day.datetime;
    this.description = day.weather.description;
    this.highTemp = day.max_temp;
    this.lowTemp = day.low_temp;
  }
}

module.exports = getWeather;
