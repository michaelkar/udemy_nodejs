const request = require('request');


let getWeather = (lat, lon, callback) => {
    request({
        //dsdev@mailinator.com //cooimm11
        url: `https://api.darksky.net/forecast/aa99b61ecbf2d1cd5363e40904be7f29/${lat},${lon}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather information.');
        }
    });
};

module.exports.getWeather = getWeather;