/**
 * The Box Container Component
 * Renders 360 box components by default. 
 * @version 1.0.1
 * @author [Vishnu Rana](http://github.com/mvishnurana1)
 */
import React, { Component } from 'react'; 
import Box from './Box'; 
import './BoxContainer.css'; 

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 360
    }
    
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box />
        )); 
        
        return <div className="BoxContainer">{ boxes }</div>
    }
}

export default BoxContainer; 