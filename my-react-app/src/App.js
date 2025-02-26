// import logo from './logo.svg';
import './App.css';
import Car from './Car.js';



function Garage() {
  const carName = "Mustang";
  return (
    <>
    <h1>Who lives in my Garage!</h1> 
    <Car brand={ carName }/>
    
    </>
  );
}


export default Garage;

