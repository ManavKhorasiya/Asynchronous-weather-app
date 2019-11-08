# Asynchronous-weather-app
-Weather app using node js. 

-API used- locationIq(for latitude and longitude) and darksky(for temperature)

-All files are inside playground folder

 Original file app.js uses callbacks
 
 Geocode.js uses locationIq api to fetch co-ordinates
 
 Weather.js uses darksky to fetch temperature based on co-ordinates
 
 Both geocode.js and weather.js are synced with each other in app.js
 
-promise.js is file to understand working of promises in javascript

-app-promise.js uses axios library to do the same tasks as app.js but by using promise instead of callbacks.
