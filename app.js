const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather.js');

const argv=yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            desccribe:'Address to look weather for',
            string:true          //converts input to string form
        }
    })
    .help()
    .alias('help','h')
    .argv;

//console.log(argv);
var addr = argv.address;

geocode.geocodeAddress(addr, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(JSON.stringify(weatherResults,undefined,2));
            }
        });
    }
});



