import React, { Component } from 'react'; 
import { randomRgbNumberGenerator as randColor} from './Helper'; 
import './Box.css'; 

class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "magenta", "violet", "blue", "red", "green"] 
    }; 
    constructor(props){
        super(props);
        this.state = { color: `pink` };
        this.ClickHandler = this.ClickHandler.bind(this);  
    }

    /**
     * 
     */
    pickColor(){
        
        let r = randColor(),  
            g = randColor(), 
            b = randColor(); 

        console.log(`${r}, ${g}, ${b}`); 
        this.setState({ color: `rgb(${r}, ${g}, ${b})` }); 
    }

    /**
     * 
     */
    ClickHandler() {
        this.pickColor(); 
    }

    render(){
        return(
            <div 
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.ClickHandler}>
            </div>
        ); 
    }
}

export default Box; 