'use strict';

console.log('Suprise! I\'m alive.')

const cors = require('cors');
const express = require('express');
const handleWeather = require('./weather');
const handleMovies = require('./movies');

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
app.use(cors());

// Define PORT value - validate that our .env is working
const PORT = process.env.PORT || 3002;
// If the server is running on 3002, then I know that something is wrong in my .env file or how I'm importin the values from it

// ROUTES
// We will use this to access our endpoints

// Create a basic default route:
// app.get correletes to axios.get
// The first parameter is a URL in quotes
app.get('/hello', (request, response) => {
  response.send('Hello from all of us!');
});

// Now I can "GET" the data from the file with the "app.get()",
// and that is how we "ROUTE". The name of it needs to be "/weather"
// according to the assignment.
// Update the "/weather" callback. Instead of referencing "weather.json" in the "data" folder,
// access the data from the weather data from the website using "await", "axios", and don't
// forget the ".data".
// Next step is to pretty much copy the code of "/weather" in order to render the movies. I
// shall be rendering it as "/movies"

app.get('/weather', handleWeather)
app.get('/movies', handleMovies)

// app.get('/movies', async (request, response, next) => {
//   try {}
// });

// Catch all "Star" route
app.get('*', (request, response) => {
  response.send('You\'re killing me smalls!.');
});

// ERRORS
// Handles any errors

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// CLASSES
// Now I need to create a Forecast class in order to render
// the date and description

// LISTEN
// Start the server
// Listen is an express method. It takes in a Port value and a callback function
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
