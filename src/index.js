import './index.css';
import React              from 'react';
import { render }         from 'react-dom';
import { Provider }       from 'react-redux';
import { BrowserRouter }  from 'react-router-dom';
import store              from './store/configureStore';
import App                from './App';
// import axiosInitiator     from 'utils/axiosInitiator';
// import registerServiceWorker from './registerServiceWorker';
// import config             from 'config';

// Import index.html
// require('index.html');
// require('sass/init.scss');

// require favicons
// require.context('images/favicons', false, /^\.\//);



// Create first root element
var appRoot = document.createElement('div');
appRoot.id = 'app_root';
document.body.appendChild(appRoot);

// load captcha library via script tag
// var recaptchaScript = document.createElement('script');
// recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
// recaptchaScript.async = true;
// recaptchaScript.defer = true;
// document.body.appendChild(recaptchaScript);

// initiate axios
// axiosInitiator(store);

// Base component Provider redux + BrowserRoute react-router
const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
render(router, document.getElementById('app_root'));