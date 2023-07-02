# FrightFlex [![Netlify Status](https://api.netlify.com/api/v1/badges/7d0d1c53-5fe6-4b3e-a3bf-345c00e0b19d/deploy-status)](https://app.netlify.com/sites/cheery-squirrel-e30888/deploys)

A simple presentation web application built for a software development company.

## Installation and setup
- Step 1: Copy the repository.

- Step 2: Ensure _Node.js_ and _npm_ are installed on your machine.

- Step 3: Run ```npm install``` to install the packages needed.

- Step 4: Add the following ```.env``` file in the root directory containing your Firebase credentials. These credentials can be generated from the Firebase UI, in the Project Settings, then Add App, then Add Web App. It should look similar to this:

```console
REACT_APP_FIREBASE_API_KEY = AIzaSyAyv-d-U35WbgxrDu53dfN34w
REACT_APP_FIREBASE_AUTH_DOMAIN = presentation-app.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID = presentation-app
REACT_APP_FIREBASE_STORAGE_BUCKET = presentation-app.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 9235760695362235
REACT_APP_FIREBASE_APP_ID = 1:9235760695362235:web:d8daaf11c13aa6a456ac28
REACT_APP_MEASUREMENT_ID = G-GGX956ERHADFHYT5
```

- Step 5: Run ```npm start``` and have fun!
