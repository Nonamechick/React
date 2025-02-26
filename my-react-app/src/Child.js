import React from "react";
// import ReactDOM from "react-dom/client";

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}
export default Child;