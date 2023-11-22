import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./Pages/index.jsx"
import "./index.css"
import { Context } from './Context/index.jsx';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Root />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);


