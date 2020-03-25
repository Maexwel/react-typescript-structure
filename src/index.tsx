import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles'; // Material-ui Theme provider
import { theme } from './theme';
import { Provider } from 'react-redux'; // Redux store provider
import storeFactory from './store/index'; // Redux store factory
import { Routes } from './router';
import { NotificationProvider } from './components/ui/notification'; // Notification provider
import * as serviceWorker from './serviceWorker';
require('dotenv').config(); // .env handle

const store = storeFactory(); // Create base redux store

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <Routes />
      </NotificationProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
