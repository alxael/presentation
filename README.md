# FrightFlex

A simple presentation web application built for a software development company.

## Installation and setup
- Step 1: Copy the repository.

- Step 2: Ensure _Node.js_ and _npm_ are installed on your machine.

- Step 3: Run ```npm install``` to install the packages needed.

- Step 4: Add the following ```config.json``` file in the ```src``` directory containing your Firebase credentials. These credentials can be generated from the Firebase UI, in the Project Settings, then Add App, then Add Web App. It should look similar to this:

```JSON
{
  "firebase": {
    "apiKey": "AIzaSyAyv-d-U35WbgxrDu53dfN34w",
    "authDomain": "presentation-app.firebaseapp.com",
    "projectId": "presentation-app",
    "storageBucket": "presentation-app.appspot.com",
    "messagingSenderId": "955760695305",
    "appId": "1:955768089705:web:d8daaf11c13aa6a456ac28",
    "measurementId": "G-GGX956YT5Z"
  }
}
```

- Step 5: Run ```npm start``` and enjoy!
