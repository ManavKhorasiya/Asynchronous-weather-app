const yargs = require('yargs');
const axios = require('axios');
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

var addr = argv.address;
var geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=bdecaa0ff19e57&q=${addr}&format=json`;

axios.get(geocodeUrl).then((response) => {
    var lat=response.data[0].lat;
    var lon=response.data[0].lon;    
    var weatherUrl = `https://api.darksky.net/forecast/b0db71eabcdbdba38c4854f6e6522259/${lat},${lon}`;
    console.log(response.data[0].display_name);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature=response.data.currently.temperature;
    var apparentemp=response.data.currently.apparentTemperature;
    console.log(`Temperature is currently: ${temperature} and it feels like: ${apparentemp}`);
}).catch((e) => {
    if(e.errno === 'ENOTFOUND'){
        console.log('Unable to connect to server');
    }
    
});