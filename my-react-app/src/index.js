import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Container from './Container.js';
import Headers from './Header.js';
import Football from './Football.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
    <App />
    <Headers />
    <Container />
    <Football/>
    </>
  // </React.StrictMode>
);


