'use strict';

console.log('Suprise! I\'m alive.')


//Require
//In our servers, we have to use 'require' instead of import. Here we will the requirements for a server

// To create a server we bring in the express
const express = require('express');

// We need to bring in our .env file, so we'll use this after we run 'npm i dotenv:
require('dotenv').config();

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

app.get('/sayHello', (request, response) => {
  console.log(request);
  response.send('Hello there.');
});

// Catch all "Star" route
app.get('*', (request, response) => {
  response.send('We are not the one\'s you are looking for.');
});

// ERRORS
// Handles any errors

// LISTEN
// Start the server
// Listen is an express method. It takes in a Port value and a callback function
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
