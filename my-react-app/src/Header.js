import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: 'red'};
    }
    render() {
        return (
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        );
    }
}