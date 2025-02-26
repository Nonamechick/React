import React from "react";


function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }
    return (
        <button onClick={shoot}>Take the Shot!</button>
    );
}
export default Football;