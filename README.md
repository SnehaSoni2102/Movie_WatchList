# MOVIE_WATCH_LIST

Hosting URL: https://moviewatchlist-44dc4.web.app
##

-Created React app 
##
-configured TailwindCss 
##
-Header
##
-Routing of Aap
##
-Login form 
##
-Sign up form 
##
-form validation
##
-React hooks - useState, useEffect, useRef.
##
validation on form - using rejex for email and password validation. If user is typing wrong email formate or password not including Upper Case and Lower case letters , Number, Special Character.
##
Created Sign Up/Sign In Authentication - if user is Authenticated then only they can go to search page. Implemented this using FiIREBASE- Create a password-based accoun and Sign in a user with an email address and password.
##
Redux ToolKit - Created Redux Store with userSlice
##
useNavigate - if Credentials are correct in sign in / Sign up. its navigate to Search page
##
Sign out - redirect to sign in page
##
Search Bar - enter movie name and it will give each and every movie related to your search
##
add to watchlist on search elements - by clicking on the button . you can add to watchList
##
Remove from watchList- by clicking on button you can remove element from watchList
##
Responsive
##
Hosting on FireBase

## Features
### Login/Sign 
Sign In/ Sign up form
   ##
redirect to sbrowser page

Sign In form - Register user can directly enter there email and password and by clicking sign in button redirected to search page  
##
Sign Up form - New user can register Themselves by enter name ,email and password and by clicking sign up button redirected to search page
 
### Search( after authentication)
   
### SearchBar
    - Search Bar
    - Movie Suggestion    



## Install Tailwind CSS
npm install -D tailwindcss
##
npx tailwindcss init
##
this line will generate tailwind.config.js file.

### Modify tailwind.config.js file

/** @type {import('tailwindcss').Config} */
##
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
##
@tailwind base;
##
@tailwind components;
##
@tailwind utilities;

## ShortCuts
Rafce - react arrow function component export.
##
shortcut to auto write component in jsx,js file

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
