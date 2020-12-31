import React, {Component} from 'react';

class Propheadercityitem extends Component{
    render(){
        return(
            <option value={this.props.city}>{this.props.city}</option>
        )
    }
}

export default Propheadercityitem;