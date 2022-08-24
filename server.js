'use strict';

console.log('Suprise! I\'m alive.')


//Require
//In our servers, we have to use 'require' instead of import. Here we will the requirements for a server

// To create a server we bring in the express
const express = require('express');
const cors = require('cors');

// We need to bring in our .env file, so we'll use this after we run 'npm i dotenv:
require('dotenv').config();

// I need to bring in the data from the "weather.json" file with a "require".
// Now that I have a "ROUTE", I can "ROUTE" the data inside of the file,
// and use it in the server.
let data = require('./data/weather.json')

// USE
// Once we have required something, we have to use it. This is where we will assign the required file a variable. React does this in one step, express take 2: require and use. This is just how Express is.

// Once we have express, we must USE express
const app = express();

// Define PORT value - validate that our .env is working
const PORT = process.env.PORT || 3002;
// If the server is running on 3002, then I know that something is wrong in my .env file or how I'm importin the values from it

// ROUTES
// We will use this to access our endpoints

// Create a basic default route:
// app.get correletes to axios.get
// The first parameter is a URL in quotes
app.get('/', (request, response) => {
  response.send('Hello from all of us!');
});

// Now I can "GET" the data from the file with the "app.get()",
// and that is how we "ROUTE". The name of it needs to be "/weather"
// according to the assignment.
app.get('/weather', (request, response) => {
  console.log(request.query.city_name);
  try {
    let cityQuery = request.query.city_name.toLowerCase();
    let cityToSend = data.find(city => city.city_name === cityQuery);
    let selected = cityToSend.data.map (day => new Forcast(day));
    response.send(selected);
  } catch(err) {
    next(err)
  }
});

app.get('/userGreetings', (request, response) => {
  console.log(request.query.name);
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  response.send(`Hello ${firstName} ${lastName}`);
});

// Catch all "Star" route
app.get('*', (request, response) => {
  response.send('We are not the one\'s you are looking for.');
});

// ERRORS
// Handles any errors

// CLASSES
class Forecast {
  constructor(day) {
    this.name = city.name;
    this.city = city;
    this.date = day.datetime;
    this.
  }
}

// LISTEN
// Start the server
// Listen is an express method. It takes in a Port value and a callback function
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
