import React from "react";

function Car(props) {
    return <li>I am a { props.brand }</li>;
}
function GarageFake(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length >0 && 
            <h2>
                YOu have {cars.length} cars in your Garage.
            </h2>
            }
        </>
    );
}

export function GarageD() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
    return (
        <>
        <h1>Who lives in my Garage</h1>
        <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
        </ul>
        </>
    );
}

export default GarageFake;  