console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success: (weather) => {
        console.log(`The weather in ${weather.name} is ${weather.weather[0].description}`);
    }
});

// Add another console log here, outside your AJAX request
console.log("After the AJAX request has been made.");