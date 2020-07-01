## Cat Match (WIP)

[![Build Status](https://travis-ci.org/jgeorgex/Cat-Match.svg?branch=master)](https://travis-ci.org/jgeorgex/Cat-Match)

A project being built with JavaScript to learn more about Node, Express, Mocha, Chai, Heroku, Tavis and Mongo.

To view the deployed app go to http://hidden-gorge-72365.herokuapp.com/

## User Stories

As a user <br>
So I can find out what cat is best for me <br>
I can fill out a questionaire and get a shortlist of cats <br>

As a user <br>
So I can see what the cats I've been recomended look like <br>
My shotlist of cats include an image for each cat <br>

As a user <br>
So I can save my shortlist of cats <br>
I can create an account which saves my shortlist <br>

As a user <br>
So I can view saved shortlist of cats <br>
I can log in to my account and view my shortlist of cats <br>

As a user <br>
So I can add cats I've seen to my shortlist <br>
I can upload an image and information about a new cat to my shortlist <br>

As a user <br>
So I can narrow down my shortlist <br>
I can delete a cat in my shortlist <br>

## Tools & Technologies

Core technolohgies - JavaScript, Express & Node

Testing Frameworks - Chai and Cypress.

Heroku - For hosting / deployment.

Travis CI - For continuous integration.

Chalk, debug and morgan - to help gain visibility when debugging.

Path - To simplify refrences to file directory paths by providing the join method.

Bootstrap - For CSS styling.

jQuery - For event handling.

esLint - Linter to keep formating in good shape.

nodemon - So you no longer have to restart server after making changes to the codebase.

ejs - To dynamically render html with embeded JavaScript.

TheCatApi - For all cat data https://thecatapi.com/

Unirest - For API requests.

Trello - For planning and tracking progress.

## Instalation

Clone or download the repository <br>
$ npm install - to install all necessary dependancies <br>
$ npm start - starts server and outputs port. It will run on port 4000 by default <br>
\$ npm run lint - runs esLint <br>

## Running Tests

Chai tests<br>
\$ npm test

Cypress tests<br>
\$ npx cypress open
or cypress run

This will open up Cypress and display a list of tests that you can run. You can either select "Run all tests" located in the top right hand corner or you can choose the individual tests listed in the main window.

## API

To add your own API key create 'environment.env' in the root folder and enter APIKEY='Your unique API key'

## To Do

- Refactor logic in shortlist.ejs
- Breakout api call code in shortlist.ejs to services folder.
- Once refactor complete write tests for routes.
- Complete remaining user stories
