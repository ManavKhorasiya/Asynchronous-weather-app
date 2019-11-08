const request = require('request');

var geocodeAddress = (addr) => {
    return new Promise((resolve,reject) => {
        request({
            url: `https://us1.locationiq.com/v1/search.php?key=bdecaa0ff19e57&q=${addr}&format=json`,
            json: true
        
        }, (error,response,body) => {
            if(error || body.error){
                reject('Unable to connect to server');
            }
            /*else if(Math.abs(body[0].lat-body[1].lat)>=2){
                callback('Unable to find address');
            }*/
            else{
                resolve({
                    address: body[0].display_name,
                    latitude: body[0].lat,
                    longitude: body[0].lon
                });
                
            }
        }); 
    });
};

geocodeAddress('00').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});