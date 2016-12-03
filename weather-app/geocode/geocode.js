const request = require('request');

let geocodeAddress = (address, callback) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connecto to google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Entered address not found.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
};