// import logo from './logo.svg';
import './App.css';
import Car from './Car.js';
import Container from './Container.js';
import Headers from './Header.js';


function Garage() {
  return (
    <>
    {/* <h1>Who lives in my Garage!</h1> favcol="yellow"  for headers*/}
    <Car />
    <Headers />
    <Container />
    </>
  );
}


export default Garage;

