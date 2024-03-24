import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';

import App from './App';
import './i18next';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Suspense fallback="loading"> */}
      <App />
      {/* </Suspense> */}
    </BrowserRouter>
  </Provider>,
);
