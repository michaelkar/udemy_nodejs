const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.a);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(response, undefined, 2));
    if (error) {
        console.log('Unable to connecto to google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Entered address not found.')
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Location latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Location longitude: ${body.results[0].geometry.location.lng}`);
    }
})