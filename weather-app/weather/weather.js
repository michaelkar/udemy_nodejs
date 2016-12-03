const request = require('request');

let convert = (temperature) => {
    return ((temperature - 32) * 5 / 9).toFixed(2);
}

let getWeather = (lat, lon, callback) => {
    request({
        url: `https://api.darksky.net/forecast/aa99b61ecbf2d1cd5363e40904be7f29/${lat},${lon}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: convert(body.currently.temperature),
                apparentTemperature: convert(body.currently.apparentTemperature)
            });
        } else {
            callback('Unable to fetch weather information.');
        }
    });
};

module.exports.getWeather = getWeather;