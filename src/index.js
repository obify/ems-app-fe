import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import  ThemeContext  from "./context/ThemeContext"; 
import { Provider } from 'react-redux';
import Store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    {/*<BrowserRouter basename="/react/demo"> */}
      <ThemeContext>
        <Provider store={Store}>
          <App />
        </Provider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
