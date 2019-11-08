const request = require('request');

var getWeather = (lat,lon,callback) => {
    request({
        url:`https://api.darksky.net/forecast/b0db71eabcdbdba38c4854f6e6522259/${lat},${lon}`,
        json: true
    }, (error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentemp: body.currently.apparentTemperature
        });
    }
        else{
            callback('Unable to fetch weather');
        }
    })
};

module.exports.getWeather = getWeather;

