import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './login';

ReactDOM.render(
    // <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    // </Provider>,
      document.getElementById('root')
);