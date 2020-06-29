This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Description of the problem and solution.`

## Description

Created the `Project Board` Prototype as an assingment.
Project Board has multiple Action items with different Title, status, multiple owners and due dates assigned to it, which will be added from the backend and rendered in the UI as individual cards.

## Solution

Frontend `React`<br/>

1. As per the UI, the components has been divided accordingly ex: in headers components like `Main Header` `Side Header` and for board seperate `Board Header` is added which increases the reusability of the components wherever necessary.
2. For state mangement `Redux` is used and `Redux Saga` is used as a middleware.

Backend `Node Express`<br/>

1. For backend the mongoDB is used for the database from mLabs.
2. Only to Create, Read and Update route is done which does corresponding Actions for the Project.

### Reasoning behind your technical choices, including architectural.

1. It is Easy to build and deploy both frontend and backend in Javacript and I have been using Express and React from the begining.
2. And MongoDB is flexible enough to use.

### Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.

1. I would complete adding the new project item from the UI to Database.
2. Delete and Updating the project item can also be completed.

### Link to other code you're particularly proud of.

### Link to the hosted application where applicable.

Assignment [https://byjus-frontend.herokuapp.com/board](Link) which is deployed in Heroku

### Setup instructions, and any tests or other documentation you created as part of your solution.

[Clone the App](https://github.com/kiran-kumar011/Byjus-backend.git) and run `cd repo-name && npm install && npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
