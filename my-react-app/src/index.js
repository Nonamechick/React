import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Garage } from './App';
// import reportWebVitals from './reportWebVitals';
import Container from './Container.js';
import Headers from './Header.js';
import Football from './Football.js';
import Goal from './MissedGoal.js';
import GarageFake from './Garage.js';
import { GarageD } from './Garage.js';
import { MyForm } from './MyForm.js';
// import { App } from './App';


const cars = ['Ford','Bwm','Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
    <Garage />
    <Headers />
    <Container />
    <Football/>
    <Goal isGoal={true}/>
    <GarageFake cars={cars} />
    <GarageD />
    <MyForm />
    {/* <App /> */}
    </>
  // </React.StrictMode>
);


