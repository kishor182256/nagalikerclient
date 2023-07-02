import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import store from './redux/store';
import { Provider } from 'react-redux';
import "./index.css";
ReactDOM.render(
  <Provider store={store}>
      <ToastContainer position="top-center"/>
      <App />
  </Provider>,
  document.getElementById('root')
);


