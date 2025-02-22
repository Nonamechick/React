import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: 'red'};
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol };
    // }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    // shouldComponentUpdate() {
    //     // return false;
    //     return true;
    // }
    // ChangeColor = () =>{
    //     this.setState({favoritecolor: "blue"});
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = 
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.ChangeColor}>ChangeColor</button>
            <div>
                <h1>My favoritecolor is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
            </div>
        );
    }
}
export default Header;