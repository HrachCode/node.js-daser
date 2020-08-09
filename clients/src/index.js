import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from  'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combine from './Store.js'
import App from './App';


 const  store =  createStore(combine)

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
