import React from "react";


function Football() {
    const shoot = (a,b) => {
        alert(b.type);
        	/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
    }
    return (
        <button onClick={(event) => shoot("Goal", event)}>Take the Shot!</button>
    );
}
export default Football;