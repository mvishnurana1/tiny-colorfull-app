import React, { Component } from 'react'; 
import { randomColor as Choice} from './Helper'; 
import './Box.css'; 

class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "magenta", "violet", "pink"] 
    }; 
    constructor(props){
        super(props);
        this.state = { color: "purple" };
        this.ClickHandler = this.ClickHandler.bind(this);  
    }

    pickColor(){
        let newColor; 

        do{
            newColor = Choice(this.props.allColors);
        }while(newColor === this.state.color); 

        this.setState({ color: newColor }); 
    }

    ClickHandler() {
        this.pickColor(); 
    }

    render(){
        return(
            <div 
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.ClickHandler}
                >
                
            </div>
        ); 
    }
}

export default Box; 